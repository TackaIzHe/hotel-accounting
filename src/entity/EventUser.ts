import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity()
export default class EventUser{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({
        default:new Date().getTime()
    })
    dateTime!:string

    @ManyToOne(()=>User,(user)=>user.events)
    targetUser!:User

    @ManyToOne(()=>User, (user)=>user.eventsUser)
    user!:User
}