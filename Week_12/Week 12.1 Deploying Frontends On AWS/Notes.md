Storage -: When you send a request to youtube they send back you mp4 files in pintrest they send you images on google they send you html, js files these things can be known as objects.

    How do you store those things.

    Let's see you have a project where you need images so you should never store those in the conventional database(postgress, mongodb), image is an object and you should never store an object in the conventional database. 

    The things you are going to search upon like ( users, todos, file metadata(file name, description etc)) these things should be store in the database.

    So when you have to store an object it should be get stored in the "Object Stores" 

    AWS -> S3 (Simple storage service)


you can go on AWS s3 and open the bucket and directy drag and drop what file you want to upload there and click on upload .

that will give you a link of the file but to directly share the link is not consider as a good practice.

Distribution -> 

CDN -> (Content Delivery Network) -: There are present many pop(Point of Present) in the world and if any one ask for through the cloud front url then the route will be reach the closest pop and ask the single source of truth for the file and cache it and give it back and the near pop cache remains for some time.

Go to the "Cloud Front" which is a famous CDN in AWS




            How to deploy Frontends to AWS

Step 1.1 - Signup and get an AWS account.

Step 1.2 - Make sure you can access S3 and cloudfront (this will automatically happen if you are the root user of that account)

Step 2 - Build your React frontend 

This approach will not work for the frameworks that use Server side rendering (like Next.js)
This will work for basic React apps, HTML/CSS/JS apps


Go to your react project

cd /link/to/your/react/project


Build your project

npm run build


Try serving the HTML/CSS/JS locally


npm i -g serve
serve

At this point you have basic HTML/CSS/JS code that you can deploy on the internet. 
You might be tempted to host this on an EC2 instance, but that is not the right approach.

Explains why-: Because in Backend you can deploy on EC2 because every user needs different thing in backend so it is present in one location instace and not using the cache method. But in frontend they go to the same website and to that EC2 approach is not good to deploy the frontend.


Go to s3 and create a new bucket

just put the name of the bucket and click on create button.

after that drag and drop your files on your bucket and click on upload.


after that go to cloudfront and click on Create distribution 

put your origin domain ex: "react-app-kirat-12.s3.eu-west-3.amazonaws.com"

give it some name or it will take let it be 

then select "Origin access control settings (recommended)"  it will let you create a new OAC

then click Create new OAC 
    give it name or let it be 
    select signing behavior to - Sign requests (recommended)
    click on create

after that 

Web Application Firewall (WAF) 
    and click on Enable security protections


after that you don't want to give the url to your friend like something.com/index.html so you select 

Default root object - optional

index.html

after that click on Create Distribution.

Now it will show ->

The S3 bucket policy needs to be updated 
Complete distribution configuration by allowing read access to CloudFront origin access control in your policy statement. Go to S3 bucket permissions to update policy

then copy the policy

then click to the Go to S3 bucket permissions to update policy 

then click on Buckets's Permissions page there is a Bucket policy 

click on edit and paste the copied policy.

wait for the deploying and that's it.



        Now How to Connect your own domain to it


click on edit

then in Alternate domain name (CNAME) - 

put your domain name ex- week12fe.100xdevs.com

for deploying frontend on https 

Custom SSl certificate 

click on Request certificate -> It will take you to another service of AWS called AWS Certificate Manager(ACM)

click on Request certificate and click on next

put your domain name ex- week12fe.100xdevs.com

select DNS validation here

key algorithm - RSA 2048

click on Request

then refresh -> then it will show you pending verifiaction because it will verify that you own this domain 

It says please go whereever you bought your domain and go to the DNS section and click on manage custom record and add a new record 

and put the AWS "CNAME name" frist value before . and in last input box put the validation "CNAME value" full copy and paste in input box of ip.

select the type as CNAME 

after that click on save 


after that wait for some time until the pending validation changes to issued 

then you go back to the cloudfront so there will be your certificate is availabe after the side button refresh

then attach the certificate and click on the save changes.

after that point the url on your domain DNS to week12fe type- A 3600 ip - d2ojm2a340j62r.cloudfront.net

after that wait for the 5 minute to DNS get propogated and it will work on https://week12fe.100xdevs.com



You can create a error page by going to cloudfront 

on 403: Frobidden 

Customize error response - Yes 

Response page path - /index.html

HTTP Response code - 200: OK

then click on the Create custom error response.

after that go to the Invalidations page
    click on Create invalidation
    Add object paths - /*
    click on Create invalidation


Now when you try to hitt the wrong route you will redirect to index.html page.