import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";

export default function setSessionCoockie(req:Request,res:Response,next:NextFunction):any{
    try{
        if(!req.cookies.Session){
            res.cookie("Session",new Date().getTime().toString(),{httpOnly:true})
        }
        return next()
    }catch(err){
        console.log(err)
        next(ApiError.internalServerError())
    }
}