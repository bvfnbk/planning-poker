/**
 * A simple PingPong game.
 *
 * This is a simple protocol, which answers to a 'ping' message with a 'pong' message. The messages include the current
 * timestamp.
 */
export default class PingPong {
    constructor(socket) {
        this.socket = socket;
        this.onError = (error) => this.handleError(error);
        this.onMessage = (data) => this.handleMessage(data);
    }

    registerListener() {
        this.socket.on('error', this.onError);
        this.socket.on('message', this.onMessage);
    }

    pong() {
        return {
            type: 'pong',
            data: {
                timestamp: Date.now(),
            }
        };
    }

    handleError(error) {
        console.log('Received Error: ', error);
    }

    handleMessage(event) {
        const parsed = JSON.parse(event);
        if (this.isPing(parsed)) {
            setTimeout(() => {
                this.socket.send(JSON.stringify(this.pong()));
            }, 1250);
        } else {
            console.warn('Unknown message.', parsed);
        }

    }

    isPing(parsedEvent) {
        if (typeof parsedEvent === 'undefined') {
            return false;
        }

        if (parsedEvent === null) {
            return false;
        }

        if (parsedEvent.hasOwnProperty('type')) {
            return parsedEvent['type'] === 'ping';
        } else {
            return false;
        }
    }
}
