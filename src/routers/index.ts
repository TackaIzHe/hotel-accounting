import { Router } from "express";
import clientRouter from "./client"
const router = Router()

router.use("/clients", clientRouter)

export default router

