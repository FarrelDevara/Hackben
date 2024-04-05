import jwt from 'jsonwebtoken'
import * as jose from 'jose'
const SECRET = "wadidaw wadididaw"

export const createToken = (payload: object) =>{
    jwt.sign(payload, SECRET)
}

export const readPayload = (token: string) => jwt.verify(token, SECRET);

export const readPayloadJose = async <T>(token: string) =>{
    const secret = new TextEncoder().encode(SECRET)
    const result = await jose.jwtVerify<T>(token, secret)
    return result.payload
}