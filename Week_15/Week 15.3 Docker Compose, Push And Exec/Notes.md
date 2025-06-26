How to push images to docker hub ->

loging into the docker hub

create a repositories in there 

make it public

docker push 100xdevs/week-15-class:tagname


after that create a image with the same name 100xdevs/week-15-class

docker build -t 100xdevs/week-15-class:v1-dev .

after that login into docker 

docker login

and if you have a single sign in then put the assess token in the password

after that run the docker push 

docker push 100xdevs/week-15-class


for pushing the new version taged

docker push 100xdevs/week-15-class:v1-dev



Docker Compose ->

Docker compoose is a tool designed to help you define and run multi-container Docker applications. With Compose, you use a YAML file to configure your application's services, networks, and volumes. Then, with a single command, you can create and start all the services from your configuration.




version: '3.8'
services:
  mongodb:
    image: mongo
    container_name: mongodb
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  backend22:
    image: backend
    container_name: backend_app
    depends_on:
      - mongodb
    ports:
      - "3000:3000"
    environment:
      MONGO_URL: "mongodb_url"

volumes:
  mongodb_data:



docker-compose up        -> for running the compose file
