Layers in Docker ->

In Docker, layers are a fundamental part of the image architecture that allows Docker to be efficient, fast, and portable. A Docker image is essentially built up from a series of layers, each representing a set of differences from the previous layer.

// we can share layers across images


How layers are made - 

1. Base Layer: The starting point of an image, typically an operating system (OS) like Ubuntu, Alpine, or any other base image specified in a Dockerfile.

2. Instruction Layers: Each command in a Dockerfile creates a new layer in the image. These include instructions like RUN, COPY, which modify the filesystem by installing packages, copying files from the host to the container, or making other changes. Each of these modifications creates a new layer on top of the base layer.

3. Reusable & Shareable: Layers are cached and reusable across different images, which makes building and sharing images more efficient. If multiple images are built from the same base image or share common instructions, they can reuse the same layers, reducing storage space and speeding up image downloads and builds.

4. Immutable: Once a layer is created, it cannot be changed. If a change is made, Docker creates a new layer that captures the difference. This immutability is key to Docker's reliability and performance, as unchanged layers can be shared across images and containers.




Optimising Dockerfile ->

What if we change the Dockerfile a bit - 


FROM node:20

WORKDIR /usr/src/app

COPY package* .
COPY ./prisma .
    
RUN npm install
RUN npx prisma generate

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js", ]




We first copy over only the things that npm install and npx prisma generate need
Then we run these scripts
Then we copy over the rest of the source code



Networks and volumes ->


Networks and volumes are concepts that become important when you have multiple containers running in which you

1. Need to persist data across docker restarts
2. Need to allow containers to talk to each other



Volumes ->

If you restart a mongo docker container, you will notice that your data goes away. 
This is because docker containers are transitory (they don’t retain data across restarts)

Without volumes

Start a mongo container locally

docker run -p 27017:27017 -d mongo

1. Open it in MongoDB Compass and add some data to it

Kill the container

docker kill <container_id>

Restart the container

docker run -p 27017:27017 -d mongo

Try to explore the database in Compass and check if the data has persisted (it wouldn’t)



With volumes ->

Create a volume ->

docker volume create volume_database

Mount the folder in mongo which actually stores the data to this volume ->

docker run -v volume_database:/data/db -p 27017:27017 mongo

Open it in MongoDB Compass and add some data to it ->

Kill the container

docker kill <container_id>

Restart the container

docker run -v volume_database:/data/db -p 27017:27017 mongo

Try to explore the database in Compass and check if the data has persisted (it will!)




Network ->

In Docker, a network is a powerful feature that allows containers to communicate with each other and with the outside world.
Docker containers can’t talk to each other by default.
localhost on a docker container means it's own network and not the network of the host machine


How to make containers talk to each other ->

Attach them to the same network

1. Clone the repo

2. Build the image

docker build -t image_tag .

1. Create a network

docker network create my_custom_network

1. Start the backend process with the network attached to it

docker run -d -p 3000:3000 --name backend --network my_custom_network image_tag

1. Start mongo on the same network 

docker run -d -v volume_database:/data/db --name mongo --network my_custom_network -p 27017:27017 mongo

1. Check the logs to ensure the db connection successful

docker logs <container_id>


1. Try to visit an endpoint and ensure you are able to talk to the database
2. If you want, you can remove the port mapping for mongo since you don’t necessarily need it exposed on your machine


Types of networks

Bridge: The default network driver for containers. When you run a container without specifying a network, it's attached to a bridge network. It provides a private internal network on the host machine, and containers on the same bridge network can communicate with each other.

Host: Removes network isolation between the container and the Docker host, and uses the host's networking directly. This is useful for services that need to handle lots of traffic or need to expose many ports.