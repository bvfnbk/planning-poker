# Planning Poker: API

![](https://img.shields.io/badge/Planning_Poker:API_(no_version_yet)-gray)

This is the API module of the "Planning Poker" application. It consists out of a "Greeting" service and is being built
into a container.

## Configuration

The service is configured using _environment variables_.

| Variable Name                     | Default Value | Comment                               |
|-----------------------------------|---------------|---------------------------------------|
| `PLANNING_POKER_API_SERVICE_PORT` | `8080`        | The port the service is listening on. |

## Usage

The module can be used _locally_ and via a container.

### Local

Run

| `npm run` &hellip; | What?                   |
|--------------------|-------------------------|
| &hellip; `start`   | Starts the API service. |
| &hellip; `test`    | Runs the unit tests.    |

in the application module directory.

### Container

### Build the Container

Run

```shell
podman build -t planning-poker-api .
```

in the application module directory.

## Run

Build the container and run

```shell
podman run -p 8080:8080 planning-poker-api
```

## Problems

### ES6 vs. CommonJS Modules

The usage of ES6 modules is not straight forward for _Node_ backend applications. Most tools expect a transformation
into a bundle using the valid module format. Considering this transformation, I should then switch to _TypeScript_.
That may shorten the paths for the `import` statements as well.

### Running Tests in the IDE

Usually (using a _Jetbrains_ IDE, at least), a developer may click on the "Play" button right besides the test in the
editor window.

Using _IntelliJ_, adding the flag `--experimental-vm-modules` helps.

## Resources

- https://jestjs.io/docs/ecmascript-modules

