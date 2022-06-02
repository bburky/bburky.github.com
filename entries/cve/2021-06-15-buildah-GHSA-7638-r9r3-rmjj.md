---
title: "Buildah/Podman chroot isolation: environment value leakage to intermediate processes"
date: 2021-06-15
url: https://github.com/containers/buildah/security/advisories/GHSA-7638-r9r3-rmjj
cve:
  - CVE-2021-3602
icon: TODO? red hat?
class: notecard-4x6
tags: cve
---

> When running processes using "chroot" isolation, the process being run can examine the environment variables of its immediate parent and grandparent processes (CVE-2021-3602). This isolation type is often used when running buildah in unprivileged containers, and it is often used to do so in CI/CD environments. If sensitive information is exposed to the original buildah process through its environment, that information will unintentionally be shared with child processes which it starts as part of handling RUN instructions or during buildah run. The commands that buildah is instructed to run can read that information if they choose to.