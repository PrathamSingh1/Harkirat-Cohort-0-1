Why docker ->

Docker/containers are important for a few reasons -

1. Kubernetes/Container orchestration
2. Running processes in isolated environments
3. Starting projects/auxilary services locally


Containerization  


What are containers ->

Containers are a way to package and distribute software applications in a way that makes them easy to deploy and run consistently across different environmentts. They allow you to package an application, along with all its dependencies and libraries, into a single unit that can be run on any machine with a container runtime, such as Docker.


1. Let you describe your configuration in a single file 
2. Can run in isolated environments
3. Make Local setup of OS projects a breeze 
4. Make installing auxiliary services/DBs easy

References

For Reference, the follwing command starts mongo in all operating systems -

docker run -d -p 27017:27017 mongo

Docker isn't the only way to create containers






Installing docker ->

Docker Desktop for Windows



docker   -> to check the weather you have docker or not in your machine
docker images  -> to check the how many imgaes are running
docker ps  -> to check the how many containers are running


Inside docker


As an application/full stack developer, you need to be comfortable with the following terminologies -

1. Docker Engine
2. Docker CLI - Command line interface
3. Docker registry



1. Docker Engine ->

Docker Engine is an open-source containerization technology that allows developers to package applications into container
Containers are standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.


2. Docker CLI ->

The command line interface lets you talk to the docker engine and lets you start/stop/list containers

docker run -d -p 27017:27017 mongo


Docker cli is not the only way to talk to a docker engine. You can hit the docker REST API to do the same thing



3. Docker registry ->

The docker registry is how Docker makes money. 

It is similar to github, but it lets you push images rather than sourcecode

Docker’s main registry - https://dockerhub.com/

Mongo image on docker registry - https://hub.docker.com/_/mongo



Images vs Containers


Docker Image ->

A Docker image is a lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files.

A good mental model for an image is Your codebase on github


Docker Container ->

A container is a running instance of an image. It encapsulates the application or serivce and its dependencies, running in an isolated environment.

A good mental model for a container is when you run node index.js on your machine from some source code you got form github.





Port Mapping  ->   provide the access form the isolated containers.

docker run -d -p 27018:27017 mongo



Common docker commands

docker images
docker ps
docker run
docker build

1. docker images

Shows you all the images that you have on your machine

2. docker ps

Shows you all the containers you are running on your machine

3. docker run

Lets you start a container
-p ⇒ let’s you create a port mapping
-d. ⇒ Let’s you run it in detatched mode

4. docker build

Lets you build an image. We will see this after we understand how to create your own Dockerfile

5. docker push

Lets you push your image to a registry

6. Extra commands

docker kill

docker exec

docker rmi mongo  -> to remove the images 

docker rmi mongo --force   -> to remove the images 

docker   -> to check the weather you have docker or not in your machine



Dockerfile ->

What is a Dockerfile ->

If you want to create an image from your own code, that you can push to dockerhub, you need to create a Dockerfile for your application.

A Dockerfile is a text document that contains all the commands a user could call on the command line to create an image.


How to write a dockerfile  ->

A dockerfile has 2 parts

1. Base image

2. Bunch of commands that you run on the base image (to install dependencies like Node.js)

