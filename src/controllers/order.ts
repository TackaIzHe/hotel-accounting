import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import { DbContex } from "../db/db";
import Order from "../entity/Order";
import DateOrder from "../entity/DateOrder";

export default class {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const orderRepo = DbContex.getRepository(Order)
            const orders = await orderRepo.find({
                relations:['datePer','client']
            });
            return res.status(200).json(orders.map((x) => {
                return ({
                    Номер:x.id,
                    Тип_оплаты:x.payType,
                    Статус_оплаты:x.isPay,
                    Сумма:x.paySum,
                    Дата:x.datePer.startDate + " " + x.datePer.endDate,
                    Клиент:x.client.id,
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

        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }

    static async post(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, payType, isPay, paySum, startDate, endDate, description } = req.body
            if (!id || !payType || !paySum || !startDate || !endDate  || isNaN(id) || isNaN(paySum)) {
                return next(ApiError.badData())
            }
            const orderRepo = DbContex.getRepository(Order)
            const newOrder = orderRepo.create(
                {
                    payType:payType,
                    isPay:isPay,
                    paySum:paySum,
                    client:id,
                    description:description
                }
            )
            await orderRepo.save(newOrder);
            const dateRepo = DbContex.getRepository(DateOrder)
            const newDate = dateRepo.create({
                order:newOrder,
                startDate:startDate,
                endDate:endDate
            })
            await dateRepo.save(newDate)
            return res.status(201).json("Заказ добавлен");
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