---
title: MinIO Operator used Kubernetes apiserver audience for AssumeRoleWithWebIdentity STS
date: 2025-04-21
cve:
   CVE-2025-32963: https://github.com/advisories/GHSA-7m6v-q233-q9j9
class: notecard-6x4
tags: cve
url: https://github.com/advisories/GHSA-7m6v-q233-q9j9
---

While reviewing MinIO Operator's [Kubernetes STS Authorization](https://min.io/docs/minio/kubernetes/upstream/developers/sts-for-operator.html) feature (very similar to AWS's [IRSA](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html)), I discovered that it used `/var/run/secrets/kubernetes.io/serviceaccount/token` for authorization. If the Pod's ServiceAccount had any Kubernetes RBAC permissions, this token could be [used with the Kubernetes API](https://kubernetes.io/docs/tasks/run-application/access-api-from-pod/#directly-accessing-the-rest-api) to perform privileged operations. Exposing this token to the MinIO Operator was a security issue.

MinIO implemented my recommendation to instead use [serviceAccountToken projected volumes](https://kubernetes.io/docs/concepts/storage/projected-volumes/#serviceaccounttoken) with a non-default audience. This ensures tokens are not valid against the Kubernetes apiserver and effectively drops privileges.

* [Security advisory](https://github.com/advisories/GHSA-7m6v-q233-q9j9)
* [Patch](https://github.com/minio/operator/pull/2418)
