import HttpStatus from "./HttpStatus.js";
import HttpError from "./HttpError.js";

/**
 * Extracts the {HttpStatus} code.
 *
 * @param error
 * @returns {HttpStatus}
 */
const getStatusCode = (error) => {
    if (typeof error === 'undefined' || error === null) {
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }

    return Object.hasOwn(error, 'status') ? error.status : HttpStatus.INTERNAL_SERVER_ERROR;
};
/**
 * A RequestHandler
 *
 * @param error
 * @param request
 * @param response
 * @param next
 */
const errorHandler = (error, request, response, _) => {
    const httpStatus = getStatusCode(error);
    response.status(httpStatus.httpStatus).send(JSON.stringify(error));
};


const notFoundHandler = (request, response, next) => {
    next(new HttpError(HttpStatus.NOT_FOUND, request.originalUrl));
};

export {
    errorHandler,
    notFoundHandler,
    getStatusCode
}
