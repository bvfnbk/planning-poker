# Planning Poker: Frontend

![](https://img.shields.io/badge/Planning_Poker:Frontend-0.1.0-green)

This is the frontend module of the "Planning Poker" application. It consists out of a static "Hello World" page which is
built into a container.

## Usage

The module is containerized and uses `podman`. The instructions, however, should be easy to adapt to `docker` et al.

### Build the Container

Run

```shell
podman build -t planning-poker-frontend:0.1.0 .
```

in the application module directory.

### Run

Build the container and run

```shell
podman run -p 8080:80 planning-poker-frontend:0.1.0
```

and visit http://localhost:8080 using the browser of your choice.
