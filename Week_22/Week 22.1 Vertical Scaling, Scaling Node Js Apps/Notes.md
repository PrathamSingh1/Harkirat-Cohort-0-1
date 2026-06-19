What we're discussing -

Server

1. Cluster module and horizontal scaling
2. Capacity Estimation, ASGs and Vertical scaling
3. Load balancers

Database

1. Indexing
2. Normalization
3. Sharding

Vertical Scaling -

Vertical scaling means increasing the size of your machine to support more load

Single threaded languages - Javascript

Multi threaded languages - Go, Java, Rust

Implementing vertical scaling in Node.js project -

You can start multiple node projects then? If there are 8 cores, then just start 8 projects?

This, ofcourse has a lot of problems

1. Just ugly to do this, keep track of the processes that are up and down.
2. Processes will have port conflicts, you'll have to run each process on a saparate port

This is where the cluster module comes into the picture

```
import express from "express";
import cluster from "cluster";
import os from "os";

const totalCPUs = os.cpus().length;

const port = 3000;

if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  const app = express();
  console.log(`Worker ${process.pid} started`);

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 5000000000) n = 5000000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }

    res.send(`Final count is ${count} ${process.pid}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}

```
