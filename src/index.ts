import express, {Router} from "express"
import { DbContex } from "./db/db";
import privateRouters from "./routers/index"
import publicRouters from "./routers/public/login"
import { ErrorMiddleware } from "./middlewares/ErrorMiddleware";
import setSessionCoockie from "./middlewares/setSessionCoockie";
import redirectMiddleware from "./middlewares/redirectMiddleware";
import cookieParser from "cookie-parser";
import authPrivateWindowMidleware from "./middlewares/authPrivateWindowMidleware";
import authPublicWindowMidleware from "./middlewares/authPublicWindowMidleware"
import cumpareJWT from "./middlewares/cumpareJWT";
require("dotenv").config({path:".env"});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser())

app.use("/static/lib",
    express.static(__dirname+"/static/lib"))

app.use(setSessionCoockie)

app.use("/static/public",
    authPublicWindowMidleware,
    express.static(__dirname+"/static/public"));

app.use("/",publicRouters)


app.use("/static/private",
    authPrivateWindowMidleware,
    cumpareJWT,
    express.static(__dirname+"/static/private"))

app.use("/", privateRouters)
app.use(redirectMiddleware)


app.use(ErrorMiddleware)

DbContex.initialize()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server started: http://localhost:${port}`)
    })
})