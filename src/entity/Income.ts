import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import EventIncome from "./EventIncome";

@Entity()
export default class Income{
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    type!:string

    @Column()
    sum!:number

    @Column()
    description!:string

    @ManyToOne(()=>EventIncome,(event)=>event.income)
    events!:EventIncome[]
}