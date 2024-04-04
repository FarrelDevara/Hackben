import { ObjectId } from "mongodb"
import { db } from "../config"
import { hashPassword } from "../helpers/bcrypt"

type UserType = {
    _id: ObjectId
    name: string
    username : string
    email: string
    password: string
}

type UserInputType = Omit<UserType, "_id">


export default class User {
    static userCollection(){
        return db.collection('users')
    }

    static async findAll(){
        return await this.userCollection().find().toArray() as UserType[]
    }

    static async createOne(data: UserInputType){
        return await this.userCollection().insertOne({
            ...data,
            password: hashPassword(data.password)
        })
    }

    
}