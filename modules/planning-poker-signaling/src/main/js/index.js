import {WebSocketServer} from 'ws';
import PingPong from './lib/PingPong.js';


/**
 * The name of the environment variable for the service port:
 *
 * @type {string}
 */
const ENV_SERVICE_PORT = 'PLANNING_POKER_SIGNALING_SERVICE_PORT';


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

/**
 * The WebSocket server.
 *
 * @type {WebSocketServer}
 */
const webSocketServer = new WebSocketServer({port});


webSocketServer.on('connection', (socket) => {
    console.log('New Connection established.');
    const game = new PingPong(socket);
    game.registerListener();
});



