import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Room from "./Room";

@Entity()
export default class EventRoom{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({
        default:new Date().getTime()
    })
    dateTime!:string

    @ManyToOne(()=>Room,(room)=>room.events)
    room!:Room

    @ManyToOne(()=>User, (user)=>user.eventsRoom)
    user!:User
}