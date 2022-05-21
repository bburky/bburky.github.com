---
date: 2015-09-28 
title: Git remote code execution via submodules and git-remote-ext
cve:
  - CVE-2015-7545
background: TODO
color: '#4e443c'
accentColor: '#f14e32'
icon: TODO
---

Git allows shell commands to be specified in `ext` URLs for remote repositories. For example, `git clone 'ext::sh -c whoami% >&2'` will execute the `whoami` command to try to connect to a remote repository. To protect users from accidentally trying to clone a malicious URL, Git submodule URLs were restricted to a safe set of protocols in [Git v2.6.1](https://github.com/git/git/blob/90f7b16b3adc78d4bbabbd426fb69aa78c714f71/Documentation/RelNotes/2.6.1.txt#L13-L18).

> Some protocols (like git-remote-ext) can execute arbitrary code
> found in the URL.  The URLs that submodules use may come from
> arbitrary sources (e.g., .gitmodules files in a remote
> repository), and can hurt those who blindly enable recursive
> fetch.  Restrict the allowed protocols to well known and safe
> ones.

## [CVE-2015-7545](https://nvd.nist.gov/vuln/detail/CVE-2015-7545)

> The (1) git-remote-ext and (2) unspecified other remote helper programs in Git before 2.3.10, 2.4.x before 2.4.10, 2.5.x before 2.5.4, and 2.6.x before 2.6.1 do not properly restrict the allowed protocols, which might allow remote attackers to execute arbitrary code via a URL in a (a) .gitmodules file or (b) unknown other sources in a submodule.

## Fix

* [transport: add a protocol-whitelist environment variable](https://github.com/git/git/commit/a5adaced2e13c135d5d9cc65be9eb95aa3bacedf)
* [submodule: allow only certain protocols for submodule fetches](https://github.com/git/git/commit/33cfccbbf35a56e190b79bdec5c85457c952a021)
* [transport: refactor protocol whitelist code](https://github.com/git/git/commit/5088d3b38775f8ac12d7f77636775b16059b67ef)
* [http: limit redirection to protocol-whitelist](https://github.com/git/git/commit/f4113cac0c88b4f36ee6f3abf3218034440a68e3)
* [http: limit redirection depth](https://github.com/git/git/commit/b258116462399b318c86165c61a5c7123043cfd4)

`git-submodule` was restricted to a safe to set of submodules by default: `GIT_ALLOW_PROTOCOL=file:git:http:https:ssh`.

Additionally, inside git's `http.c`, libcurl was restricted to the same protocol whitelist. Libcurl's recusion depth was also limited to prevent a redirect loop from causing git to hang.
