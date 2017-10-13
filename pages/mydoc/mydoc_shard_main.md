---
title: Shard Database
tags: 
keywords: shard
last_updated: April 28, 2017
summary: "Silkroad uses a shard database architecture that we're going to explain withing this section."
sidebar: shard_sidebar
permalink: mydoc_shard_main
---

## Sharding:

Basically, sharding means partitioning. While I am not sure if Joymax got it right, we can still see they did split their tables in some way. The whole idea of sharding is to balance load between instances of a database. However, we don't really see that at Silkroad's database, but we see table sharding into less complex structures, which is good I guess.