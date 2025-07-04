import { Router } from "express";
import income from "../controllers/income"

const router = Router()

router.get("/:id", async(req ,res ,next)=>{
    await income.get(req, res, next);
})
router.get("/", async(req,res,next)=>{
    await income.getAll(req, res, next);
})
router.post("/", async(req,res,next)=>{
    await income.post(req, res, next);
})
router.put("/", async(req,res,next)=>{
    await income.put(req, res, next);
})
router.delete("/", async(req,res,next)=>{
    await income.del(req, res, next);
})
export default router