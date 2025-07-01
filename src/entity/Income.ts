import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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


}