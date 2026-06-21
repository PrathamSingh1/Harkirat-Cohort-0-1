Indexing in Postgres -

We've created postgres tables many times now. Let's see how/if indexing helps us speed up queries

Create a postgres DB locally (don't use neon, we have a lot of data to store, will be very slow)

docker run -p 5432:5432 -e POSTGRES_PASSWORD=mysecretpassword -d postgres

Connect to it and create some dummy data in it

docker exec -it container_id /bin/bash
psql -U postgres
