import { NextFunction, Request, Response } from "express";
import ApiError from "../errors/ApiError";
import { DbContex } from "../db/db";
import Expense from "../entity/Expense";

export default class {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const expenseRepo = DbContex.getRepository(Expense)
            const expenses = await expenseRepo.find()
            return res.status(200).json(expenses.map((x)=>{
                return({
                    Номер: x.id,
                    Тип: x.type,
                    Сумма: x.sum,
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
            
        } catch (err) {
            console.log(err)
            return next(ApiError.internalServerError())
        }
    }

    static async post(req: Request, res: Response, next: NextFunction) {
        try {
            const {type, sum, description} = req.body
            if(!type || !sum || isNaN(sum)){
                return next(ApiError.badData())
            }
            const expenseRepo = DbContex.getRepository(Expense)
            const createExpense = expenseRepo.create(
                {
                    type:type,
                    sum:sum,
                    description:description
                }
            )
            await expenseRepo.save(createExpense)
            return res.status(201).json("Расход добавлен")
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