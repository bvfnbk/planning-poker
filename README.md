# Planning Poker

A WebRTC-based, stateless planning poker game. The application consists out of several modules.

## Modules

- `modules/planning-poker-frontend`: The frontend application module.
- `modules/planning-poker-gateway`: The gateway application module.

## Requirements

- Local Container Platform including a "Compose" (_Podman_ with `podman-compose`, _Docker Desktop_).

## Usage

### Build Modules

Build all application module container images (including their versions) as described in

- [modules/planning-poker-frontend/README.md](modules/planning-poker-frontend/README.md)
- [modules/planning-poker-gateway/README.md](modules/planning-poker-gateway/README.md)
- [modules/planning-poker-signaling/README.md](modules/planning-poker-signaling/README.md)
-

### Run

Run

```shell
podman compose up
```

in the project base directory.

**Please note:**

- Add `-d` to run containers in background.
- Add `--force-recreate` to always recreate containers.

## Network Configuration

All modules are supposed to be served as container. This section provides an overview over the network configuration
used by default:

| Service                    | Hostname    | Port (External) | Port (Internal) | Target                             |
|----------------------------|-------------|-----------------|-----------------|------------------------------------|
| `planning-poker-gateway`   | `gateway`   | `8000`          | `80`            | Upstream services, e.g. `frontend` |
|                            |             | `8001`          | `81`            | Websocket                          |
| `planning-poker-frontend`  | `frontend`  | `8100`          | `80`            | Page                               | 
| `planning-poker-signaling` | `signaling` | `8200`          | `8080`          | WebSocket                          |

**Please note:** At the moment it is not possible for the gateway to proxy the signaling service behind the same port as
the other services. The signaling service is a TCP service which is handled _before_ HTTP which effectively disables the
HTTP route to the frontend.

### Overview: HTTP

```mermaid
flowchart LR
  Frontend["<code>planning-poker-frontend</code>"]
  Gateway["<code>planning-poker-gateway</code>"]
  Client
  Client -- :8000 --> Gateway
  Client -- :8100 --> Frontend
  Gateway -- :80 --> Frontend
```

### Overview: WebSocket (TCP)

```mermaid
flowchart LR
  Signaling["<code>planning-poker-signaling</code>"]
  Gateway["<code>planning-poker-gateway</code>"]
  Client
  Client -- :8001 --> Gateway
  Client -- :8200 --> Signaling
  Gateway -- :81 --> Signaling
```
