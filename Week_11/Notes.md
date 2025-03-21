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
