class ApiErrors extends Error{
    constructor(status,message){
        super()
        this.status = status
        this.message = message
    }

    static noContent(message){
        return new ApiErrors(200,message)
    }

    static badRequest(message){
        return new ApiErrors(404,message)
    }

    
    static forbiden(message){
        return new ApiErrors(403,message)
    }
    static Conflict(message){
        return new ApiErrors(409,message)
    }
    
    static internal(message){
        return new ApiErrors(500,message)
    }
    
}

module.exports = ApiErrors