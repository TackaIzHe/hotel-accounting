import { Errback, NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";

export function ErrorMiddleware(err:Errback,req:Request,res:Response,next:NextFunction):any{
    if(err instanceof ApiError){
        return res.status(err.cod).json(err.message);
    }
}