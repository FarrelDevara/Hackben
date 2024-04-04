import { ObjectId } from 'mongodb';
import { db } from '../config';
import { z } from 'zod';

export type ProductType = {
    _id: ObjectId;
    name: string,
    slug: string,
    description: string,
    excerpt: string,
    price: number,
    tags: [string],
    thumbnail: string,
    images: [string],
    createdAt: string,
    updatedAt: string
};

export default class Product {
    static productCollection() {
      return db.collection('products');
    }

    static async findAll() {
        return (await this.productCollection().find().toArray()) as ProductType[];
      }

      static async findBySlug(slug: string) {
        return (await this.productCollection().findOne({slug: slug}))
      }  
}