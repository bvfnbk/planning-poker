# Planning Poker: Signaling

![](https://img.shields.io/badge/Planning_Poker:Signaling-0.1.0-green)

The _Planning Poker: Signaling_ is the signaling service for the "Planning Poker" WebRTC application. It implements a
_Node_ _WebSocket_ service.

## Usage

The module can be used _locally_ and via a container.

### Local

To start the service locally, run

```shell
npm run start
```

in the application module directory.

### Container

#### Build the Container

Run

```shell
podman build -t planning-poker-signaling:0.1.0 .
```

in the application module container.

#### Run the Container

Build the container and run

```shell
podman run -p 8080:8080 planning-poker-signaling:0.1.0
```

Being only a _WebSocket_-server it is alone not of much use.
