---
title: Missing authorization check on cross repository blob mount in multiple open source container registries
date: 2024-07-09
cve:
   CVE-2024-39897: https://github.com/project-zot/zot/security/advisories/GHSA-55r9-5mx9-qq7r
class: notecard-6x4
tags: cve
---

[`POST /v2/<name>/blobs/uploads/?mount=<digest>&from=<other_name>` cross repository blob mount](https://github.com/opencontainers/distribution-spec/blob/main/spec.md#mounting-a-blob-from-another-repository) is unique among the other Docker registry HTTP v2 API endpoints in that it requires an access control check on two container names. Many new registry implementations have accidentally omitted `pull` access control check on the source repository.

## [Zot CVE-2024-39897](https://github.com/project-zot/zot/security/advisories/GHSA-55r9-5mx9-qq7r) 

> Cache driver `GetBlob()` allows read access to any blob without access control check. 

## [Gitea](https://github.com/go-gitea/gitea/releases/tag/v1.20.0)

Fixed in [v1.20.0](https://github.com/go-gitea/gitea/releases/tag/v1.20.0). [PR #22759](https://github.com/go-gitea/gitea/pull/22759) created 1 day after reporting, but unmerged for 5 months. No CVE issued. 
