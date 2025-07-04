import { Router } from "express";
import expense from "../controllers/expense";

const router = Router()

router.get("/:id", async(req ,res ,next)=>{
    await expense.get(req, res, next);
})
router.get("/", async(req,res,next)=>{
    await expense.getAll(req, res, next);
})
router.post("/", async(req,res,next)=>{
    await expense.post(req, res, next);
})
router.put("/", async(req,res,next)=>{
    await expense.put(req, res, next);
})
router.delete("/", async(req,res,next)=>{
    await expense.del(req, res, next);
})
export default router