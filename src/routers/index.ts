import { Router } from "express";
import clientRouter from "./client"
import orderRouter from "./order"
import roomRouter from "./room"
import expenseRouter from "./expense"
import incomeRouter from "./income" 
const router = Router()

router.use("/clients", clientRouter)
router.use("/orders", orderRouter)
router.use("/rooms",roomRouter)
router.use("/expenses", expenseRouter)
router.use("/incomes", incomeRouter)

export default router

