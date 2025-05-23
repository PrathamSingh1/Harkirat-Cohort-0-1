docker 

docker run hello-world

Common commands to know-:

1. docker run 
2. docker ps 
3. docker kill


Running an image

1. Running a simple image 

Let's say you wan't to run MongoDB locally->

docker run mongo


Adding a port mapping->

docker run -p 27017:27017 mongo


Starting in detached mode-> 

Adding -d will ensure it starts in the background->

docker run -d -p 27017:27017 mongo

Inspecting a container->

docker ps

Stopping a container->

docker kill <container_id>



Mongo ->

docker run -d -p 27017:27017 mongo



Postgres ->

docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

The connection string for this postgres would be


postgresql://postgres:mysecretpassword@localhost:5432/postgres


psql -h localhost -d postgres -U postgres