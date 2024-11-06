export default class HttpError extends Error {
    constructor(status, originalUrl) {
        super();
        this.status = status;
        this.originalUrl = originalUrl;
    }
}
