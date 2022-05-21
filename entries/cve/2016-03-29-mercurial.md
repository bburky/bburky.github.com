---
title: Mercurial arbitrary code execution
date: 2016-03-29
# url: https://www.mercurial-scm.org/wiki/WhatsNew/Archive
cve:
  - CVE-2016-3105
  - CVE-2016-3068
  - CVE-2016-3069
# White bg
# grey/blue
---

## CVE-2016-3105 Arbitrary code execution when converting Git repos

* [Mercurial 3.8.1](https://www.mercurial-scm.org/wiki/WhatsNew/Archive#Mercurial_3.8_.2F_3.8.1_.282016-5-1.29)
  * [convert: pass absolute paths to git (SEC)](https://www.mercurial-scm.org/repo/hg/rev/a56296f55a5e)

> Mercurial prior to 3.8 allowed arbitrary code execution when using the convert extension on Git repos with hostile names. This could affect automated code conversion services that allow arbitrary repository names. This is a further side-effect of Git CVE-2015-7545. Reported and fixed by Blake Burkhart. 

## CVE-2016-3068 Arbitrary code execution with Git subrepos

* [Mercurial 3.7.3](https://www.mercurial-scm.org/wiki/WhatsNew/Archive#Mercurial_3.7.3_.282016-3-29.29)
  * [subrepo: set GIT_ALLOW_PROTOCOL to limit git clone protocols (SEC)](https://www.mercurial-scm.org/repo/hg/rev/34d43cb85de8)

> Mercurial prior to 3.7.3 allowed URLs for Git subrepos that could result in arbitrary code execution on clone. This is a further side-effect of Git CVE-2015-7545. Reported by Blake Burkhart. 

## CVE-2016-3069 Arbitrary code execution when converting Git repos

* [Mercurial 3.7.3](https://www.mercurial-scm.org/wiki/WhatsNew/Archive#Mercurial_3.7.3_.282016-3-29.29)
  * [convert: add new, non-clowny interface for shelling out to git (SEC)](https://www.mercurial-scm.org/repo/hg/rev/197eed39e3d5)
  * [convert: rewrite calls to Git to use the new shelling mechanism (SEC)](https://www.mercurial-scm.org/repo/hg/rev/cdda7b96afff)
  * [convert: dead code removal - old git calling functions (SEC)](https://www.mercurial-scm.org/repo/hg/rev/b732e7f2aba4)
  * [convert: rewrite gitpipe to use common.commandline (SEC)](https://www.mercurial-scm.org/repo/hg/rev/80cac1de6aea)
  * [convert: test for shell injection in git calls (SEC)](https://www.mercurial-scm.org/repo/hg/rev/ae279d4a19e9)

> Mercurial prior to 3.7.3 allowed arbitrary code execution when converting Git repos with hostile names. This could affect automated conversion services. Reported by Blake Burkhart. 