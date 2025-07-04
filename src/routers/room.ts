import { Router } from "express";
import room from "../controllers/room";

const router = Router()

router.get("/:id", async(req ,res ,next)=>{
    await room.get(req, res, next);
})
router.get("/", async(req,res,next)=>{
    await room.getAll(req, res, next);
})
router.post("/", async(req,res,next)=>{
    await room.post(req, res, next);
})
router.put("/", async(req,res,next)=>{
    await room.put(req, res, next);
})
router.delete("/", async(req,res,next)=>{
    await room.del(req, res, next);
})
export default router