class ApiError extends Error {
  constructor(statusCode, message, errors = [],statck = '') {
    super(message);
    this.statusCode = statusCode;
    this.data=null
    this.message = message;
    this.success = false; // Indicates that the operation was not successful
    this.errors = errors; // Array of errors, if any
    if(statck){
      this.stack = statck; // Stack trace for debugging
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
    // Indicates that this error is expected and can be handled gracefully
  }
}