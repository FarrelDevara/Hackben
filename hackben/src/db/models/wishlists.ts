import { ObjectId } from 'mongodb';
import { db } from '../config';
import { z } from 'zod';

interface WishlistType {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
};

interface Product {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: Date;
    updatedAt: Date;
}

export type ShowWishList = {
    _id: ObjectId;
    userId: ObjectId;
    productId: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    productDetails: Product;
}

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
        const data = await db.collection('wishlists').aggregate([
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
                    productDetails: 1
                }
            }
        ]).toArray();

        return data as ShowWishList[]
    }

    static async deleteOne(id: string){
        return(await this.wishlistCollection().deleteOne({_id : new ObjectId(id)}))
    }
}