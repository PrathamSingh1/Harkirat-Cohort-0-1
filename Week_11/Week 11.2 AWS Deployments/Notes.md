By default 

HTTP -  80 
HTTPS - 443


go to the file where you put the certificate and open it in terminal 

ssh -i something-password.pem ubuntu@YOUR_IP   // it will through an error 

chmod 700 something-password.pem    // run this after and then run the above command again

if on the windows then paste the file in the users and go to the security setting in advance option and remove all users and only one user should be there and provide it the full controll


then run the command in cmd it will work 

git clone https://github.com/hkirat/sum-server/


if it show error then try to ping 

ping google.com 

if it not working then

sudo nano /etc/resolv.conf


and put it in the last of the file 

nameserver 8.8.8.8

by vim or nano depends on you.






when you have to add two backend to the same server you can't do that so here comes the reverse proxy in the picture.

Let's see you have two backend one is running on port 8080 and other is running on port 8081
and something is running on port 80 which is known as Reverse Proxy (which decides that is the request is comming from backend one then send it to port 8080 and if comming from the second one then send to the 8081)



NGINX - NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. It started out as a web server designed for maximum performance and stability. In addition to its HTTP server capabilities, NGINX also function as a proxy server for email (IMAP, POP3, and SMTP) and a reverse proxy and load balancer for HTTP, TCP, and UDP servers.


we are going to nginx to use only for reverse proxying.



Installing nginx

sudo apt update 
sudo apt install nginx




point the ip to your domain after that change the config file of nginx 

sudo vi /etc/nginx/nginx.conf           // to access the file

sudo rm /etc/nginx/nginx.conf           // to remove the file

sudo vi /etc/nginx/nginx.conf           // to reopen the file with nothing inside then paste the given code.



code -:

events {
    # Event directives...
}

http {
	server {
    listen 80;
    server_name be1.100xdevs.com;

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
}


after that restart this by below command-

sudo nginx -s reload


after that run your backend by node then you are good to go.

There comes a question how do i keep running the index.js after i close the machine the answer is Process Manager


run these command-

npm i -g pm2

then 

pm2 start index.js              // this should run it forever