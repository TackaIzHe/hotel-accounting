import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";
import Client from "./Client";
import Expenses from "./Expense";
import Income from "./Income";
import Room from "./Room";
import client from "../controllers/client";
import EventOrder from "./EventOrder";
import EventClient from "./EventClient";
import EventExpense from "./EventExpense";
import EventIncome from "./EventIncome";
import EventRoom from "./EventRoom";
import EventUser from "./EventUser";

@Entity()
export default class User{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    name!:string

    @Column({
        enum:["Admin","Manager","User"]
    })
    role!:string

    @Column()
    login!:string

    @Column()
    password!:string

    @OneToMany(()=>EventUser,(event)=>event.targetUser)
    events!:EventUser[]

    @OneToMany(()=>EventOrder,(event)=>event.user)
    eventsOrder!:EventOrder[]

    @OneToMany(()=>EventClient,(event)=>event.user)
    eventsClient!:EventClient[]

    @OneToMany(()=>EventExpense,(event)=>event.user)
    eventsExpense!:EventExpense[]

    @OneToMany(()=>EventIncome,(event)=>event.user)
    eventsIncome!:EventIncome[]

    @OneToMany(()=>EventRoom,(event)=>event.user)
    eventsRoom!:EventRoom[]

    @OneToMany(()=>EventUser,(event)=>event.user)
    eventsUser!:EventUser[]
}