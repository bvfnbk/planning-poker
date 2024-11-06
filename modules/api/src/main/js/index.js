import express from 'express';

import {notFoundHandler, errorHandler} from './lib/errorHandler.js';

/**
 * The name of the environment variable for the service port:
 *
 * @type {string}
 */
const ENV_SERVICE_PORT = 'PLANNING_POKER_API_SERVICE_PORT';

/**
 * The default port:
 *
 * @type {number}
 */
const DEFAULT_PORT = 8080;

/**
 * The actual port to listen on:
 *
 * @type {number}
 */
const port = parseInt(process.env[ENV_SERVICE_PORT]) || DEFAULT_PORT;


const application = express();
application.get('/api/hello/:name', (request, response) => {
    console.log(JSON.stringify(request.params));
    const name = request.params.name;
    response.set({
        "Content-Type": "application/json"
    });
    response.status(200).send(JSON.stringify({message: `Hello ${name}`}));
});

application.use(notFoundHandler);
application.use(errorHandler);


application.listen(port, () => {
    console.log(`Planning Poker API service listening on port ${port}`);
});
