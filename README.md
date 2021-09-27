# SICEI API

Simple Api using Fastify and Docker.

## Build and run

Build the Docker image:

```txt
docker build -t node-sicei .
```

Run the Docker image:

```txt
docker run -p 3000:3000 -d node-sicei
```

See the list of students: <http://localhost:3000/students>