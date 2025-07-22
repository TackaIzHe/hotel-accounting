import jwt from "jsonwebtoken"

export default function jwtSign(obj:object):string{
    const jwtSecret = process.env.JSW_SECRET || "asdqwdasd"
    const jwtStr = jwt.sign(obj,jwtSecret)
    return jwtStr;
}