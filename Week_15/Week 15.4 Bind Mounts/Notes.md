Bind Mounts ->

Bind mounts have been around since the early days of Docker. Bind mounts have limited functionaliy compared to volumes. When you use a bind mount, a file or directory on the host machine is mountend into a container. The file or directory is referenced by its absolute path on the host machine. By contrast, when you use a volume, a new directory is created within Docker''s storage directory on the host machine, and Docker manages that directory's contents.


Bind Mount -> It is using for the hot reload in local development.


docker run -p 3000:3000 nextapp

but when you want to add bind mount 

docker run -p 3000:3000 -v ./app:/nextapp/app nextapp