import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";

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
}