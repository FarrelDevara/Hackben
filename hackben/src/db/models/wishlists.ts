import { ObjectId } from 'mongodb';
import { db } from '../config';
import { z } from 'zod';

type WishlistType = {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
};

type InputWishlist = Omit<WishlistType, "_id">

export default class Wishlist {
    static wishlistCollection() {
      return db.collection('wishlists');
    }

    static async createOne(body: InputWishlist){
        const result = await this.wishlistCollection().insertOne({
            productId: new ObjectId(body.productId),
            userId: new ObjectId(body.userId)
        })
        return {
            _id: result.insertedId,
            ...body
        }
    }

    static async findAllByUserId(id: string){
        return(await this.wishlistCollection().find({userId: new ObjectId(id)}).toArray()) as WishlistType[]
    }

    static async deleteOne(id: string){
        return(await this.wishlistCollection().deleteOne({_id : new ObjectId(id)}))
    }
}