import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Order from "./Order";

@Entity()
export default class EventOrder{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({
        default:new Date().getTime()
    })
    dateTime!:string

    @ManyToOne(()=>Order,(order)=>order.events)
    order!:Order

    @ManyToOne(()=>User, (user)=>user.eventsOrder)
    user!:User
}