import bcrypt from "bcrypt"

export default async function auth(password:string,cruptPassword:string){
        try{
            const res = await bcrypt.compare(password,cruptPassword)
            return res;
        }catch(err){
            console.log(err)
        }
    }