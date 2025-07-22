import { NextFunction, Request, Response } from "express";
import { DbContex } from "../db/db";
import User from "../entity/User";

export default function authPrivateWindowMidleware(req:Request,res:Response,next:NextFunction):any{
    const prot =req.protocol
    const host = req.host
    if(req.cookies.auth){
        return res.redirect(`${prot}://${host}/static/private/html/index.html`);
    }
    next()

}