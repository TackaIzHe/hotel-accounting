import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Expense from "./Expense";

@Entity()
export default class EventExpense{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({
        default:new Date().getTime()
    })
    dateTime!:string

    @ManyToOne(()=>Expense,(expense)=>expense.events)
    expense!:Expense

    @ManyToOne(()=>User, (user)=>user.eventsExpense)
    user!:User
}