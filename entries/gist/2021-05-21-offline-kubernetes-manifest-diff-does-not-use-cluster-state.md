---
title: Offline Kubernetes manifest diff (does not use cluster state)
date: '2021-05-21'
url: 'https://gist.github.com/2d281a681f41c1965e208883161169de'
---
Offline `kubectl diff` style tool (does not use cluster state). Diff two local files containing templated manifests (e.g. kustomize or helm output).

Resources in each file are matched by api, kind, namespace and name. This is also shown in the filename fields of the diff output.

Usage:
```
k8s-diff.py old-manifests.yaml new-manifests.yaml
kustomize build . | k8s-diff.py /tmp/old-manifests.yaml -
```
