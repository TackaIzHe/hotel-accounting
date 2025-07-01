import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Expenses{ //расходы
    @PrimaryGeneratedColumn()
    id!:number

    @Column()
    type!:string

    @Column()
    sum!:number

    @Column()
    description!:string


}