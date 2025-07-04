import {Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import Client from "./Client"
import DateOrder from "./DateOrder"
import Room from "./Room"

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

    @ManyToOne(()=>Room,(room)=>room.orders)
    roomNumber!:Room

    @OneToOne(()=>DateOrder,(datePer)=>datePer.order)
    @JoinColumn()
    datePer!:DateOrder

    @ManyToOne(()=>Client,(client)=>client.orders)
    client!:Client

    @Column({
        default:" "
    })
    description!:string

}