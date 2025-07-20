import {DataSource} from "typeorm"
import Client from "../entity/Client"
import Expenses from "../entity/Expense"
import Income from "../entity/Income"
import Order from "../entity/Order"
import DateOrder from "../entity/DateOrder"
import Room from "../entity/Room"
import User from "../entity/User"
import EventClient from "../entity/EventClient"
import EventExpense from "../entity/EventExpense"
import EventIncome from "../entity/EventIncome"
import EventOrder from "../entity/EventOrder"
import EventRoom from "../entity/EventRoom"
import EventUser from "../entity/EventUser"

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
        Room,
        User,
        EventClient,
        EventExpense,
        EventIncome,
        EventOrder,
        EventRoom,
        EventUser
    }
})