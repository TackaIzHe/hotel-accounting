import { Router } from "express";
import clientRouter from "./client"
import orderRouter from "./order"
const router = Router()

router.use("/clients", clientRouter)
router.use("/orders", orderRouter)

export default router

