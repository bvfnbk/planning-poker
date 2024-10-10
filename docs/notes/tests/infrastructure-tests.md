# Infrastructure Tests

Are infrastructure tests possible?

## Overview

The gateway has to provide _certain_ features, it has to answer to specific requests. And it has to forward the requests
to the correct backend service.

Tests involve automated setup and tear-down of the environment (e.g. using `podman`). The assertions to be made have to
rely on HTTP features first. Secondly, it may be possible to listen on the composition logs for certain events.

This eventually requires to have a dedicated test configuration for all containers.

_Gherkin_ may be used as a _domain language_ to write these kind of tests.

## Example

The requests

```http request
GET /
```

and

```http request
GET /index.html
```

are supposed to work (and return the current `index.html` file). Another request, e.g.

```http request
GET /i-do-not-exist
```

should present a `404 Not Found` error page _from the frontend_. This illustrates, that the configuration is correct.
