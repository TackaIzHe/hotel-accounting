import { Router } from "express";
import order from "../controllers/order";

const router = Router()

router.get("/:id", async(req ,res ,next)=>{
    await order.get(req, res, next);
})
router.get("/", async(req,res,next)=>{
    await order.getAll(req, res, next);
})
router.post("/", async(req,res,next)=>{
    await order.post(req, res, next);
})
router.put("/", async(req,res,next)=>{
    await order.put(req, res, next);
})
router.delete("/", async(req,res,next)=>{
    await order.del(req, res, next);
})
export default router