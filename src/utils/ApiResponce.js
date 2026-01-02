class ApiResponce {
    constructor(
        statusCode,
        data,
        message = "Request was successful"
    ) {
        this.statusCode = statusCode;
        this.data = data;
        this.success = statusCode >= 200 && statusCode < 400;
        this.message = message;
    }
}