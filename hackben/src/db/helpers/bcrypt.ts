import bcrypt from "bcryptjs"

export const hashPassword = (password: string): string =>{
    return bcrypt.hashSync(password)
}

export const comparePassword = (password: string, hash: string): boolean =>{
    return bcrypt.compareSync(password,hash)
}