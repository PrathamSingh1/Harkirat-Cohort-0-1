What are we learning

Pre-requisites - You need to have docker installed on your machine

1. Queues
2. Pub subs (Publish-Subscribe)
3. Redis

More specifically, we're learning how we would build a system like leetcode.

Redis -

Redis is an open-source, in-memory data structure store, used as a database, cache, and message broker

One of the key features of Redis is its ability to keep all data in memory, which allows for high performance and low latency access to data.

In memory data structure store -

Very similar to a DB, only it is in memory. That doesn’t mean it doesn’t have persistence

RDB (Redis Database File): The RDB persistence performs point-in-time snapshots of your dataset at specified intervals. It creates a compact single-file representation of the entire Redis dataset. The snapshotting process can be configured to run at specified intervals, such as every X minutes if Y keys have changed.

save 900 1 # Save the dataset every 900 seconds if at least 1 key changed
save 300 10 # Save the dataset every 300 seconds if at least 10 keys changed
save 60 10000 # Save the dataset every 60 seconds if at least 10000 keys changed

AOF (Append Only File): The AOF persistence logs every write operation received by the server, appending each operation to a file. This file can then be replayed on startup to reconstruct the dataset.
