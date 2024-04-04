import { ObjectId } from 'mongodb';
import { db } from '../config';
import { hashPassword } from '../helpers/bcrypt';
import { z } from 'zod';

type UserType = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
};

type UserInputType = Omit<UserType, '_id'>;

const userSchema = z.object({
  name: z.string({required_error: "name is required"}).min(1),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export default class User {
  static userCollection() {
    return db.collection('users');
  }

  static async findAll() {
    return (await this.userCollection().find().toArray()) as UserType[];
  }

  static async findOneByEmail(email: string){
    return (await this.userCollection().findOne({email}))
  }

  static async createOne(data: UserInputType) {
    try {
      const parsedData = userSchema.safeParse(data);
        
    if (parsedData.success === false) {
        // console.log(parsedData.error, "<<<<<<<<<<<<<<<<<<<<");
        throw parsedData.error;
    }
    
    const findUser = await User.findOneByEmail(data.email)
    console.log(findUser);
    
    if (findUser) {
        throw "Email must be unique";
    }

     const addUser = await this.userCollection().insertOne({
        ...data,
        password: hashPassword(data.password),
      });

      return Response.json({data: addUser, message: 'Register Successfully' });
    } catch (error) {
        throw error
    }
  }
}
