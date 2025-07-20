import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Income from "./Income";

@Entity()
export default class EventIncome{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({
        default:new Date().getTime()
    })
    dateTime!:string

    @ManyToOne(()=>Income,(income)=>income.events)
    income!:Income

    @ManyToOne(()=>User, (user)=>user.eventsIncome)
    user!:User
}