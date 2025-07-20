import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";
import User from "./User";
import EventClient from "./EventClient";

@Entity()
export default class Client{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    FIO!:string

    @Column()
    tel!:string

    @Column()
    city!:string

    @OneToMany(()=>Order,(order)=>order.client)
    orders!:Order[]

    @Column({
        default:""
    })
    description!:string

    @OneToMany(()=>EventClient,(event)=>event.client)
    events!:EventClient[]
}