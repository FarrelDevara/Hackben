import { ObjectId } from "mongodb"
import { db } from "../config"

type UserType = {
    _id: ObjectId
    name: String
    username : String
    email: String
    password: String
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
        return await this.userCollection().insertOne(data)
    }

}