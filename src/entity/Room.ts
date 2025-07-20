import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";
import User from "./User";
import EventRoom from "./EventRoom";

@Entity()
export default class{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    number!:number

    @Column({
        default:" "
    })
    description!:string

    @OneToMany(()=>Order,(order)=>order.roomNumber)
    orders!:Order[]

    @OneToMany(()=>EventRoom,(event)=>event.room)
    events!:EventRoom[]
}