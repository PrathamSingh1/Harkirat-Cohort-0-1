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