import { ObjectId } from 'mongodb';
import { db } from '../config';

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
        try {
          return (await this.productCollection().find().toArray()) as ProductType[];
        } catch (error) {
          console.log(error);
        }
      }

      static async findAndSortAll(page: number, pageSize: number = 9): Promise<Product[]> {
        try {
          const skipValue = (page - 1) * pageSize;
          
          const result = await db.collection("products").find()
            .skip(skipValue)
            .limit(pageSize)
            .toArray();
          
            // console.log(result, "hasil tanpa search");
            
          return result;
        } catch (error) {
          console.error("Error fetching and sorting products:", error);
          throw error;
        }
      }
    
      static async findBySlug(slug: string) {
        return (await this.productCollection().findOne({slug: slug}))
      }  
}