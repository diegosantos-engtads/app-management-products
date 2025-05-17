import { ProductModel } from '@/models/product/product-model';
import { ProductRepository } from './product-repository';
import dataSeed from '../../db/seed/products.json';

export class JsonProductRepository implements ProductRepository {
  private products: ProductModel[] = dataSeed.products;

  async findAll(): Promise<ProductModel[]> {
    return this.products;
  }

  async findSearchName(term: string): Promise<ProductModel[]> {
    const lowerCase = term.toLowerCase();
    return this.products.filter(
      prod =>
        prod.name.toLowerCase().includes(lowerCase) ||
        prod.description?.toLowerCase().includes(lowerCase),
    );
  }
}
//Inplementação Concreta
