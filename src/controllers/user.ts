import { NextFunction } from "express"
import ApiError from "../errors/ApiError"

export default class user {
    static async get(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }
    static async reg(req: Request, res: Response, next: NextFunction) {
        try {
            //доступно админам
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }
    static async put(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }
    static async del(req: Request, res: Response, next: NextFunction) {
        try {

        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }
}