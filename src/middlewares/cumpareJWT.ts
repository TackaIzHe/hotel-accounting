import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import ApiError from "../errors/ApiError";
import { DbContex } from "../db/db";
import User from "../entity/User";

export default function cumpareJWT(req:Request,res:Response,next:NextFunction):any{
    try{
        const JWTSecret = process.env.JSW_SECRET || "dqwdasfohwieufgwfuhywe"
        const q = jwt.verify(req.cookies.auth,JWTSecret)
        const par = JSON.parse(JSON.stringify(q))
        if(!par.id || isNaN(par.id) || !par.name){
            return next(ApiError.forbidden())
        }
        const userRepo = DbContex.getRepository(User)
        const findUser = userRepo.findOne({where:{id:par.id,name:par.name}})
        if(!findUser){
            res.cookie('auth','',{maxAge:0})
            return next(ApiError.forbidden())
        }
        next()
    }catch(err){
        console.log(err)
        console.log(req.ip)
        res.cookie('auth','',{maxAge:0})
        const prot =req.protocol
        const host = req.host
        return res.redirect(`${prot}://${host}/static/public/html/login.html`);
    }
}