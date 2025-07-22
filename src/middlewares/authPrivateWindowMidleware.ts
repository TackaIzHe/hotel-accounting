import { NextFunction, Request, Response } from "express";

export default function authPrivateWindowMidleware(req:Request,res:Response,next:NextFunction):any{
    const prot =req.protocol
    const host = req.host
    if(!req.cookies.auth){
        return res.redirect(`${prot}://${host}/static/public/html/login.html`);
    }
    next()

}