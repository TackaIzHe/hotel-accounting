import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";
import Client from "./Client";

@Entity()
export default class EventClient{
    @PrimaryGeneratedColumn()
    id!:number

    @Column({
        default:new Date().getTime()
    })
    dateTime!:string

    @ManyToOne(()=>Client,(client)=>client.events)
    client!:Client

    @ManyToOne(()=>User, (user)=>user.eventsClient)
    user!:User
}