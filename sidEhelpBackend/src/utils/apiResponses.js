class apiResponses{
    constructor(statusCode, data = null, message = 'Success', errors = []) {
        this.statusCode = statusCode; // HTTP status code for the response
        this.success = statusCode < 400; // Indicates that the operation was successful
        this.data = data; // Data to be returned in the response
        this.message = message; // Message to be returned in the response
        this.errors = errors; // Array of errors, if any
    }
}
