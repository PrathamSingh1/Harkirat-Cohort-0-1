            Certificate management 

Use -:  https://certbot.eff.org/            

My HTTP website is running "Nginx" on "Ubuntu 20"

after that -:

Install Certbot on your machine

sudo snap install --classic certbot

Link your certbot -:

sudo ln -s /snap/bin/certbot /usr/bin/certbot

Choose how you'd like to run Certbot - Run this command to get a certificate and have Certbot edit your nginx configuration automatically to serve it, turning on HTTPS access in a single step.


sudo certbot --nginx

after that it will ask you

Which names would you like to activate HTTPS for?
We recommend selecting either all domains, or all domains in a VirtualHost/server block.

then choose the selection by number ex - 9 and press enter