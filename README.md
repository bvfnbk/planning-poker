# Planning Poker

A WebRTC-based, stateless planning poker game. The application consists out of several modules.

## Modules

- `modules/planning-poker-frontend`: The frontend application module.
- `modules/planning-poker-gateway`: The gateway application module.

## Requirements

- Local Container Platform including a "Compose" (_Podman_ with `podman-compose`, _Docker Desktop_).

## Usage

### Build Modules

Build all application module container images (including their versions) as described in\

- [modules/planning-poker-frontend/README.md](modules/planning-poker-frontend/README.md)
- [modules/planning-poker-gateway/README.md](modules/planning-poker-gateway/README.md)

### Run

Run

```shell
podman-compose up
```

in the project base directory.

**Please note:**

- Add `-d` to run containers in background.
- Add `--force-recreate` to always recreate containers.

## Network Configuration

All modules are supposed to be served as container. This section provides an overview over the network configuration
used by default:

| Service                   | Hostname   | Port (External) | Port (Internal) | Target                             |
|---------------------------|------------|-----------------|-----------------|------------------------------------|
| `planning-poker-frontend` | `frontend` | `9000`          | `80`            | Page                               | 
| `planning-poker-gateway`  | `gateway`  | `8000`          | `80`            | Upstream services, e.g. `frontend` |

```mermaid
flowchart LR
    Client
    Frontend["<code>planning-poker-frontend</code>"]
    Gateway["<code>planning-poker-gateway</code>"]

    Client -- :9000 --> Frontend
    Client -- :8000 --> Gateway
    Gateway -- :80 --> Frontend
```

**Please note:** The common route is via the gateway.
