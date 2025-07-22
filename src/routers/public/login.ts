import { Router } from "express";
import login from "../../controllers/public/login";

const router = Router();

router.post("/users/login",async(req,res,next)=>{
    await login.log(req,res,next);
})

export default router;