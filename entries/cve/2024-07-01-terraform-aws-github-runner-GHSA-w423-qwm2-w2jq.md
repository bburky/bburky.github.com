---
title: "Overly permissive IAM policy in github-aws-runners/terraform-aws-github-runner" 
date: 2024-07-01
url: https://github.com/github-aws-runners/terraform-aws-github-runner/security/advisories/GHSA-w423-qwm2-w2jq
cve:
  GHSA-w423-qwm2-w2jq: https://github.com/github-aws-runners/terraform-aws-github-runner/security/advisories/GHSA-w423-qwm2-w2jq
class: notecard-6x4
tags: cve
---

Overly permissive AWS IAM policy allowed runner EC2 instances to read sensitive tokens for other instances from SSM SecureStrings.

Runner EC2 instances could read other instances' tokens (jitconfig and registration tokens) from SSM parameters. A runner's jitconfig is normally scoped down to a single repo, workflow and job. Stealing another runner's jitconfig allows lateral movement throughout the GitHub organization or repository and exposes the other runner's GITHUB_TOKEN, GitHub OIDC JWT ID token and any secrets. 

Submitted patch with ResourceTag based IAM policy checking `ec2:SourceInstanceARN` and added tags to SSM parameters.

* [Security advisory](https://github.com/github-aws-runners/terraform-aws-github-runner/security/advisories/GHSA-w423-qwm2-w2jq) (No CVE issued)
* [Patch with ResourceTag based IAM policy](https://github.com/github-aws-runners/terraform-aws-github-runner/commit/9399cf29bec963dfa305f367f37c098a76130371)