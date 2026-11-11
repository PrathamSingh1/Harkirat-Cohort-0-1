What is kubernetes-

Kubernetes (popularly known as k8s) is a container orchestration engine, which as the name suggests lets you create, delete, and update containers.

This is useful when

1. You have your docker images in the docker registry and want to deploy it in a cloud native fashion
2. You want to not worry about patching, crashes, You want the system to auto heal
3. You want to autoscale with some simple constructs
4. You want to observe your complete system in a simple dashboard

Your frontend, backend are all pods in your kubernetes cluster-

cluster->Node->Pods->Containers->Image

Jargon-:

Cluster -

A bunch of worker nodes + master nodes make up your kubernetes cluster . You can always add more / remove nodes from a cluster.

Nodes -

In kubernetes, you can create and connect various machines together, all of which are running kubernetes. Every machine here is known as a node

There are two types of nodes
Master Node (Control pane) - The node that takes care of deploying the containers/healing them/listening to the developer to understand what to deploy

Worker Nodes - The nodes that actually run your Backend/frontend

Images -

A Docker image is a lightweight, standalone, and executable software package that includes everything needed to run a piece of software, including the code, runtime, libraries, environment variables, and configuration files. Images are built from a set of instructions defined in a file called a Dockerfile.

Containers -

A container is an image in execution. For example if you run
docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

Pods -

A pod is the smallest and simplest unit in the Kubernetes object model that you can create or deploy

Creating a k8s cluster -

Locally (Make sure you have docker)-

1. minukube
2. kind - https://kind.sigs.k8s.io/docs/user/quick-start/
