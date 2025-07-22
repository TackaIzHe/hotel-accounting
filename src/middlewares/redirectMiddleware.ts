import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";

export default function redirectMiddleware(req:Request,res:Response,next:NextFunction):any{
    try{
        const prot =req.protocol
        const host = req.host
        if(!req.cookies.auth){
            return res.redirect(`${prot}://${host}/static/public/html/login.html`);
        }
        else if(req.cookies.auth){
            return res.redirect(`${prot}://${host}/static/private/html/index.html`);
        }
        next()
        // else{
        //     res.links(`${prot}://${host}/static/public/html/login.html`);
        //     next()
        // }
    }catch(err){
        console.log(err)
        return next(ApiError.internalServerError())
    }
}