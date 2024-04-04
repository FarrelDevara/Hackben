import { ObjectId } from 'mongodb';
import { db } from '../config';
import { z } from 'zod';

type WishlistType = {
    _id: ObjectId;
    userId: ObjectId;
    ProductId: ObjectId;
};


export default class Wishlist {
    static wistlistCollection() {
      return db.collection('wishlists');
    }

    static async findAllById(id: string){
        console.log("masook");
        
    }
}