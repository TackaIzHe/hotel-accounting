import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";

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

    @Column()
    description!:string
}