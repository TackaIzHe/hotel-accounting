export default class ApiError extends Error{
    cod
    constructor(cod:number, mess:string){
        super()
        this.cod = cod
        this.message = mess
    }

    static badData(){
        return new ApiError(404,"Не коректные данные");
    }
    static notFound(){
        return new ApiError(404,"Не найдено");
    }
    static haveDate(){
        return new ApiError(404,"Дата занята");
    }
    static internalServerError(){
        return new ApiError(500,"Ошибка сервера");
    }
}