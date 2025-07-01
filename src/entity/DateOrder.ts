import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";

@Entity()
export default class DateOrder{
    @PrimaryGeneratedColumn()
    id!:number

    @OneToOne(()=>Order,(order)=>order.datePer)
    order!:Order

    @Column()
    startDate!:string

    @Column()
    endDate!:string

}