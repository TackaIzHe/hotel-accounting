import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import EventExpense from "./EventExpense";

@Entity()
export default class Expenses{ //расходы
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    type!:string

    @Column()
    sum!:number

    @Column({
        default:" "
    })
    description!:string

    @OneToMany(()=>EventExpense,(event)=>event.expense)
    events!:EventExpense[]
}