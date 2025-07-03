import { NextFunction, Request, Response, Router } from "express";
import client from "../controllers/client";

const router = Router()

router.get("/:id", async(req ,res ,next)=>{
    await client.get(req, res, next);
})
router.get("/", async(req,res,next)=>{
    await client.getAll(req, res, next);
})
router.post("/", async(req,res,next)=>{
    await client.post(req, res, next);
})
router.put("/", async(req,res,next)=>{
    await client.put(req, res, next);
})
router.delete("/", async(req,res,next)=>{
    await client.del(req, res, next);
})
export default router