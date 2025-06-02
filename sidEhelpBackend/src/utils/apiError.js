class ApiError extends Error {
  constructor(statusCode, message, errors = [],stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.data=null
    this.message = message;
    this.success = false; // Indicates that the operation was not successful
    this.errors = errors; // Array of errors, if any
    if(stack){
      this.stack = stack; // Stack trace for debugging
    }else{
        Error.captureStackTrace(this, this.constructor);
    }
    // Indicates that this error is expected and can be handled gracefully
  }
}