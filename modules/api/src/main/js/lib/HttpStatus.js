import {isInstanceOf, isString} from './assertUtilities.js';

export default class HttpStatus {
    static OK = new HttpStatus(200, 'OK');
    static BAD_REQUEST = new HttpStatus(400, 'Bad Request');
    static NOT_FOUND = new HttpStatus(404, 'Not Found');
    static INTERNAL_SERVER_ERROR = new HttpStatus(500, 'Internal Server Error');

    constructor(status, message) {
        isInstanceOf(status, HttpStatus);
        isString(message);

        this.httpStatus = status;
        this.message = message;
    }
}
