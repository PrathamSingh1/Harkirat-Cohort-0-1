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





How to create a CI/CD pipeline ->



name: Linting and formatting on PR
on:
  pull_request:
    branches:
      - '**'

jobs:

  Continuous-Integration:

    name: Performs linting, formatting on the application
    runs-on: ubuntu-latest
    steps:
      - name: Checkout the Repository
        uses: actions/checkout@v3

      - name: Setup pnpm
        run: npm install -g pnpm
        
      - name: Install Dependencies
        run: pnpm install

      - name: Run linting check
        run: pnpm run lint:check

      - name: Check formatting
        run: pnpm run format:check






Lets add a build pipeline for out repo ->

Anytime a user creates a PR, we need to run npm run build and only if it succeeds should the workflow succeed

Add .github/workflows/build.yml  in the root folder

Create the workflow ->

name: Build on PR

on:
  pull_request:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install Dependencies
        run: npm install
        
      - name: Run Build
        run: npm run build



Push this to master branch

Create a new branch with some minimal changes and create a PR from it

You should see the workflow run




Let's add a deploy step ->


Create dockerfiles for the apps you have 

Create docker/Dokerfile.user


FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

COPY package.json package-lock.json turbo.json tsconfig.json ./

COPY apps ./apps
COPY packages ./packages

# Install dependencies
RUN npm install
# Can you add a script to the global package.json that does this?
RUN cd packages/db && npx prisma generate && cd ../..

# Can you filter the build down to just one app?
RUN npm run build

CMD ["npm", "run", "start-user-app"]


Add start-user-app script to the root package.json->

"start-user-app": "cd ./apps/user-app && npm run start"



Create the CD pipeline that

1. Clones the repo
2. Builds the docker image
3. Pushes the docker image



name: Build and Deploy to Docker Hub

on:
  push:
    branches:
      - master

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
    - name: Check Out Repo
      uses: actions/checkout@v2

    - name: Log in to Docker Hub
      uses: docker/login-action@v1
      with:
        username: ${{ secrets.DOCKER_USERNAME }}
        password: ${{ secrets.DOCKER_PASSWORD }}

    - name: Build and Push Docker image
      uses: docker/build-push-action@v2
      with:
        context: .
        file: ./Dockerfile
        push: true
        tags: 100xdevs/web-app:latest  # Replace with your Docker Hub username and repository

    - name: Verify Pushed Image
      run: docker pull 100xdevs/web-app:latest  # Replace with your Docker Hub username and repository



Make sure to add the dockerhub secrets to github secrets of the repo (DOCKER_USERNAME, DOCKER_PASSWORD)

You should see a workflow running