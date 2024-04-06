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

    static async findOneByProductId(id: string){
        const productId = new ObjectId(id)
        
        // console.log(productId, "yang masuk ke findOne");
        return(await this.wishlistCollection().findOne({productId})) as WishlistType
    }

    static async findOneByUserId(id: string){
        return(await this.wishlistCollection().findOne({userId: new ObjectId(id)})) as WishlistType
    }

    static async createOne(body: InputWishlist){
        console.log("masookkk");
        
        console.log(body, "<<<<<<< body");
        
        const result = await this.wishlistCollection().insertOne({
            productId: new ObjectId(body.productId),
            userId: new ObjectId(body.userId),
            createdAt : new Date(),
            updatedAt : new Date()
        })

        return {
            _id: result.insertedId,
            ...body
        }
    }

    static async findAllByUserId(id: string){
        const userId = new ObjectId(id)
        const data = await db.collection('Wishlist').aggregate([
            {
                $match: {
                    userId
                }
            },
            {
                $lookup: {
                    from: "products", 
                    localField: "productId", 
                    foreignField: "_id", 
                    as: "productDetails" 
                }
            },
            {
                $unwind: "$productDetails" 
            },
            {
                $project: {
                    _id: 1,
                    userId: 1,
                    productId: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    "productDetails.name": 1,
                    "productDetails.slug": 1,
                    "productDetails.description": 1,
                    "productDetails.excerpt": 1,
                    "productDetails.price": 1,
                    "productDetails.tags": 1,
                    "productDetails.thumbnail": 1,
                    "productDetails.images": 1,
                    "productDetails.createdAt": 1,
                    "productDetails.updatedAt": 1,
                }
            }
        ]).toArray();

        return data
    }

    static async deleteOne(id: string){
        return(await this.wishlistCollection().deleteOne({_id : new ObjectId(id)}))
    }
}