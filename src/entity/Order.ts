import {Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import Client from "./Client"
import DateOrder from "./DateOrder"

@Entity()
export default class Order{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    payType!:string

    @Column({
        default:false
    })
    isPay!:boolean

    @Column()
    paySum!:number

    @OneToOne(()=>DateOrder,(dateOrder)=>dateOrder.order)
    datePer!:DateOrder

    @ManyToOne(()=>Client,(client)=>client.orders)
    client!:Client

    @Column()
    description!:string

}