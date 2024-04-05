import jwt, {JwtPayload} from 'jsonwebtoken'
import * as jose from 'jose'
const SECRET = "wadidaw wadididaw"

export const createToken = (payload: JwtPayload) =>{
    // console.log(payload, "<<<<<,payload");
    
    return jwt.sign(payload, SECRET)
}

export const readPayload = (token: string) => jwt.verify(token, SECRET);

export const readPayloadJose = async <T>(token: string) =>{
    const secret = new TextEncoder().encode(SECRET)
    const result = await jose.jwtVerify<T>(token, secret)
    return result.payload
}