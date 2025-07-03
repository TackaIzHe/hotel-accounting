import express, {Router} from "express"
import { DbContex } from "./db/db";
import routers from "./routers/index"
import { ErrorMiddleware } from "./middlewares/ErrorMiddleware";
require("dotenv").config({path:".env"});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/static",express.static(__dirname+"/public"));

app.use("/", routers)

app.use(ErrorMiddleware)

DbContex.initialize()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server started: http://localhost:${port}`)
    })
})