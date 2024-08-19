---
title: "Kyverno policy bypass using Kubernetes finalizers"
date: 2023-06-01
url: https://medium.com/defense-unicorns/kyverno-cve-2023-34091-bypassing-policies-using-kubernetes-finalizers-14e51843016e
cve:
  CVE-2023-34091: https://github.com/kyverno/kyverno/security/advisories/GHSA-hq4m-4948-64cc
tags:
  - cve
background: '#000'
color: '#ddd'
accentColor: '#999'
icon: TODO
class: notecard-4x6
---
Discovered that in versions of Kyverno prior to 1.10.0, Kyverno does not enforce policies on resources with a `deletionTimestamp`, which occurs during finalization after resource deletion begins. This allows a bypass of "validate, generate, or mutate-existing policies, even in cases where the validationFailureAction field is set to Enforce."

Impact is low for most Kubernetes resources because most controllers ignore changes during finalization. However, a few built in resource kinds such as ConfigMaps, Secrets and Services may honor changes during deletion. Custom resources may also be affected.

An attacker could first maliciously add a non-existent finalizer and begin deletion of a resource, then perform a malicious update of the resource bypassing Kyverno policies.

* [Blog post, writeup, timeline](https://medium.com/defense-unicorns/kyverno-cve-2023-34091-bypassing-policies-using-kubernetes-finalizers-14e51843016e)
* [Kyverno security advisory](https://github.com/kyverno/kyverno/security/advisories/GHSA-hq4m-4948-64cc)
