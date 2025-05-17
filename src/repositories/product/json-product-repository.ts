import { ProductModel } from '@/models/product/product-model';
import { ProductRepository } from './product-repository';
import dataSeed from '../../db/seed/products.json';

export class JsonProductRepository implements ProductRepository {
  private products: ProductModel[] = dataSeed.products;

  async findAll(): Promise<ProductModel[]> {
    return this.products;
  }
}
