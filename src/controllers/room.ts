import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import { DbContex } from "../db/db";
import Room from "../entity/Room"

export default class {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const roomRepo = DbContex.getRepository(Room)
            const rooms = await roomRepo.find({
                relations:['orders']
            });
            return res.status(200).json(rooms.map((x) => {
                return ({
                    Номер:x.id,
                    Номер_Комнаты:x.number,
                    Описание:x.description,
                    Заказы:x.orders.map((x)=>{return x.id})
                })
            }))
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
            const { number, description } = req.body
            if (!number || isNaN(number) || !description) {
                return next(ApiError.badData())
            }
            const roomRepo = DbContex.getRepository(Room)
            const newRoom = roomRepo.create(
                {
                    number:number,
                    description:description
                }
            )
            await roomRepo.save(newRoom);
            return res.status(201).json("Комната добавлена");
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