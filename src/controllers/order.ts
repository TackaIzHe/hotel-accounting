import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import { DbContex } from "../db/db";
import Order from "../entity/Order";
import DateOrder from "../entity/DateOrder";
import Room from "../entity/Room";

export default class {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const orderRepo = DbContex.getRepository(Order)
            const orders = await orderRepo.find({
                relations: ['datePer', 'client','roomNumber']
            });
            return res.status(200).json(orders.map((x) => {
                return ({
                    Номер: x.id,
                    Тип_оплаты: x.payType,
                    Статус_оплаты: x.isPay,
                    Сумма: x.paySum,
                    Дата: x.datePer.startDate.split('T')[0] + " " + x.datePer.endDate.split('T')[0],
                    Клиент: x.client.id,
                    Номер_Комнаты: x.roomNumber.number,
                    Описание: x.description
                })
            }))
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }

    static async get(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const parseId = Number.parseInt(id)
            if(!id || isNaN(parseId)){
                return next(ApiError.badData())
            }
            const orderRepo = DbContex.getRepository(Order)
            const findOrder = await orderRepo.findOne({where:{id:parseId},relations:['datePer','client','roomNumber']})
            if(!findOrder){
                return next(ApiError.notFound())
            }
            res.status(200).json(findOrder)
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }

    static async post(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, payType, isPay, paySum, startDate, endDate, description, room } = req.body
            if (
                !id ||
                !payType ||
                !paySum ||
                !startDate ||
                !endDate ||
                isNaN(id) ||
                isNaN(paySum) ||
                !room ||
                isNaN(room) ||
                startDate>endDate
            ) {
                return next(ApiError.badData())
            }
            const roomRepo = DbContex.getRepository(Room)
            const orderRepo = DbContex.getRepository(Order)
            const dateRepo = DbContex.getRepository(DateOrder)

            const findRoom = await roomRepo.findOne({where:{number:room},relations:['orders']})
            if(!findRoom){
                return next(ApiError.notFound())
            }
            
            for(let x of findRoom.orders){
                const date = await orderRepo.findOne({where:{id:x.id},relations:['datePer']})
                if(!date || new Date(date.datePer.startDate) < new Date()){
                    continue
                }
                if((new Date(date.datePer.startDate)<= new Date(startDate) && 
                new Date(date.datePer.endDate)>= new Date(startDate)) ||
                (new Date(date.datePer.startDate)<= new Date(endDate) && 
                new Date(date.datePer.endDate)>= new Date(endDate)) ||
                (new Date(date.datePer.startDate)>= new Date(startDate) && 
                new Date(date.datePer.endDate)<= new Date(endDate))
                ){
                    return next(ApiError.haveDate())
                }
            }
            const newOrder = orderRepo.create(
                {
                    payType: payType,
                    isPay: isPay,
                    paySum: paySum,
                    client: id,
                    roomNumber:findRoom,
                    description: description
                }
            )
            await orderRepo.save(newOrder);
            const newDate = dateRepo.create({
                order: newOrder,
                startDate: startDate,
                endDate: endDate
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