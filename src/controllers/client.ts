import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import { DbContex } from "../db/db";
import Client from "../entity/Client";

export default class {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const clietRepo = DbContex.getRepository(Client)
            const clients = await clietRepo.find({
                relations:['orders']
            });
            return res.status(200).json(clients.map((x) => {
                return ({
                    Номер:x.id,
                    ФИО:x.FIO,
                    Номер_телефона:x.tel,
                    Город:x.city,
                    Заказы:x.orders.map((x)=>{return x.id}),
                    Описание:x.description
                })
            }))
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params
            const parseId = Number.parseInt(id)
            if(!id || isNaN(parseId)){
                return next(ApiError.badData())
            }
            const clientRepo = DbContex.getRepository(Client)
            const findClient = await clientRepo.findOne({where:{id:parseId}})
            if(!findClient){
                return next(ApiError.notFound())
            }
            res.status(200).json(findClient)
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }

    static async post(req: Request, res: Response, next: NextFunction) {
        try {
            const { FIO, tel, city, description } = req.body
            if (!FIO || !tel || !city ) {
                return next(ApiError.badData())
            }
            const clietRepo = DbContex.getRepository(Client)
            const newClient = clietRepo.create(
                {
                    FIO: FIO,
                    tel: tel,
                    city: city,
                    description: description
                }
            )
            await clietRepo.save(newClient);
            return res.status(201).json("Клиент добавлен");
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