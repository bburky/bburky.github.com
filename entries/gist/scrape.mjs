import { fileURLToPath } from "url";
import process from "process";
import path from "path";
import { writeFile, readFile} from 'node:fs/promises'

import { Octokit, App } from "octokit";
import slugify from '@sindresorhus/slugify';
import fetch from "node-fetch";
import matter from "gray-matter";


// const octokit = new Octokit({ auth: `personal-access-token123` });
const octokit = new Octokit();

async function processGist(dir, gist) {
  const name = gist.description || gist.id;
  const date = gist.created_at.split('T')[0];
  const url = gist.html_url;
  const outputFilename = `${date}-${slugify(name)}.md`;

  // console.log(gist.created_at, gist.id, gist.html_url, gist.description);
  // console.log(outputFilename);

  let readme;
  for (const [_, file] of Object.entries(gist.files)) {
    if (file.filename == "README.md") {
      readme = await (await fetch(file.raw_url)).text();
      break;
    }
  }

  await writeFile(path.join(dir, outputFilename), matter.stringify(readme ?? "", {
    title: name,
    date,
    url,
  }));
}

async function main(urls) {
  const dir = path.dirname(fileURLToPath(import.meta.url));
  const scrapeignore = new Set((await readFile(path.join(dir, '.scrapeignore'), 'utf-8')).replace(/\n$/, "").split('\n'));
  
  for (const gist of (await octokit.rest.gists.listForUser({ username: "bburky" })).data) {
    if (urls && urls.length > 0) {
      if (!urls.includes(gist.html_url)) {
        continue;
      }
    } else if (!gist.public) {
      continue;
    }

    if (scrapeignore.has(gist.html_url)) {
      continue;
    }
    scrapeignore.add(gist.html_url);

    await processGist(dir, gist);
  }
  await writeFile(path.join(dir, '.scrapeignore'), Array.from(scrapeignore).sort().join("\n") + "\n");
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2));
}
