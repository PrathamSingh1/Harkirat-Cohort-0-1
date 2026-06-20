Horizontal scaling -

Horizontal scaling represents increasing the number of instances you have based on a metric to be able to support more load.
AWS has the concept of Auto scaling groups, which as the name suggests lets you autoscale the number of machines based on certain metrics.

Buzz words -

Images (AMI) - Snapshots of a machine from which you can create more machines
Load balancer - An entrypoint that your users send requests to that forwards it to one of many machines (or more specifically, to a target group). Its a fully managed service which means you don’t have to worry about scaling it ever. AWS takes care of making it highly available.
Target groups - A group of EC2 instances that a load balancer can send requests to
Launch template - A template that can be used to start new machines

There are two ways you can use ASGs -

- Create a EC2 instance.
- install Node.js on it https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04
- Clone the repo - https://github.com/100xdevs-cohort-2/week-22
- Create an AMI with your machine
- Create security group
- Launch template
- Ref for User data - https://stackoverflow.com/questions/15904095/how-to-check-whether-my-user-data-passing-to-ec2-instance-is-working

```
#!/bin/bash
export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v22.0.0/bin/
echo "hi there before"
echo "hi there after"
npm install -g pm2
cd /home/ubuntu/week-22
pm2 start index.js
pm2 save
pm2 startup

```
