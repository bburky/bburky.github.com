---
title: "PlaidCTF 2019: A Whaley Good Joke writeup"
date: 2019-04-14
url: https://ctftime.org/writeup/25656
tags: ctf
class: notecard-6x4
---

The challenge was to fix a broken Docker tar archive, with an unknown order of layers.

A file isn't deleted from a layer unless it was already created by a previous layer, this makes it possible to solve a dependency tree of the layers (this is what most solutions to this challenge did).

However, a much simpler solution is possible: sort the docker tar layers by mtime timestamp. The files created in the docker tar layers have different timestamps, accurate to one second.

1. Find the newest timestamp in each layer
2. Sort layers by their newest timestamp
3. Reconstruct the container image tarball with this layer order

* [CTF writeup](https://ctftime.org/writeup/25656)  
* [Solution source code](https://gist.github.com/bburky/58edd7ce00cd4405429269695568fe2c)
