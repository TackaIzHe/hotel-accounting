import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import { DbContex } from "../db/db";
import Client from "../entity/Client";

export default class {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }

    static async post(req: Request, res: Response, next: NextFunction) {
        try {
            
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