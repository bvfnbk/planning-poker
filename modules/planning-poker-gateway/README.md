# Planning Poker: Gateway

The _Planning Poker: Gateway_ is a proxy application. Any HTTP connection passes over the gateway. It uses the _Traefik_
application proxy.

**Please note:** _Traefik_ will not be used as a binary directly but rather as inside a container.

## Configuration

_Traefik_ is able to determine its configuration dynamically (e.g. using an interface to the container platform). This
container uses _static_ configuration instead.

Please cf. `src/main/traefik/traefik.yaml` for the current configuration.

## Usage

The module is containerized and uses `podman`. The instructions, however, should be easy to adapt to `docker` et al.

### Build the Container

Run

```shell
podman build -t planning-poker-gateway:0.1.0 .
```

in the application module directory.

### Run

This container is not supposed to be run stand-alone but inside the [application composition](../../compose.yaml).
Please see the [Top-Level Read-Me](../../README.md) for details.

## Resources

### Traefik Application Proxy

- Container: https://hub.docker.com/_/traefik (Docker Official Image)
- Documentation: https://doc.traefik.io/traefik/

