import {DataSource} from "typeorm"
import Client from "../entity/Client"
import Expenses from "../entity/Expense"
import Income from "../entity/Income"
import Order from "../entity/Order"
import DateOrder from "../entity/DateOrder"
import Room from "../entity/Room"

export const DbContex = new DataSource({
    type:"sqlite",
    database:"db.sqlite",
    synchronize:true,
    logging:true,
    entities:{
        Client,
        Expenses,
        Income,
        Order,
        DateOrder,
        Room
    }
})