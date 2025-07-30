What is CI and CD   ->

Continuous Integration: Continuous Integration (CI) is a development practice where developers frequently integrate their code changes into a shared repositroy, preferably several times a day. Each interation is automatically verified by 

1. Building the project and 
2. Running automated tests.


This process allows teams to detect problems early, improve software quality, and reduce the time it takes to validate and release new software updates.

Continuous Deployment: As the name suggests, deploying your code continuously to various environments (dev/stage/prod)




Continuous Deployment in Github ->

We'll be deploying a next.js app to EC2 servers via Docker

You don't really need Docker here, since it's deploying on a simple EC2 server.

If you deploy to 

1. GCP App runner
2. ECS 
3. Kubernetes

then it makes more sense to deploy a dockerised