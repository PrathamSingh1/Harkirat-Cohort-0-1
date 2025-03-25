            What are serverless Backends


"Serverless" is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it mean s that developers and operators do not have to worry about the servers.


Easier defination:

What if you could just wirte your express routes and run a command. The app would automatically

1. Deploy 
2. Autoscale
3. Charge you on a per request basis (rather than you paying for VMs)

Problems with this approach 

1. More expensive at scale 
2. Cold start problem


Famous serverless providers

There are many famous backend serverless providers-

AWS Lambda
Google Cloud Functions
Cloudflare Workers


When should you use a serverless architecture?

1. When you have to get off the ground fast and don't want to worry about deployments 
2. When you cant't anticipate the traffic and don't want to worry about autoscaling
3. If you have very low traffic and want to optimise for costs


Initializing a worker 

To create and deploy your application, you can take the following steps-

Initialize a worker:

npm create cloudflare -- my-app

// Select no for Do you want to deploy your application


If you are unable to get the server 8787 then :


sudo apt update && sudo apt install libatomic1 -y


// To login on cloudflare from terminal

npx wrangler login


to check

npx wrangler whoami 


to run 

npm run dev


to deploy it 


npm run deploy



// Express does not work on the cloudflare workers so what we use we use Hono


Working with cloudflare workers-

1. initialize a new app

npm create hono@latest my-app


