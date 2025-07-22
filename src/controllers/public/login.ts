import { Request, Response, NextFunction } from "express"
import ApiError from "../../errors/ApiError"
import { DbContex } from "../../db/db";
import User from "../../entity/User";
import auth from "../../module/auth";
import jwtSign from "../../module/jwtSign";


export default class login{
    static async log(req: Request, res: Response, next: NextFunction) {
        try {
            const {login, password} = req.body;
            if(!login || !password){
                return next(ApiError.badData())
            }
            const userRepo = DbContex.getRepository(User)
            const findUser = await userRepo.findOne({where:{login:login}})
            if(!findUser){
                return next(ApiError.notFound())
            }
            const result = await auth(password, findUser.password);
            if(!result){
                return next(ApiError.forbidden())
            }
            const jwt = jwtSign({id:findUser.id,name:findUser.name});
            res.status(200).cookie("auth",jwt,{httpOnly:true,maxAge:30000}).json('auth')
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }
}