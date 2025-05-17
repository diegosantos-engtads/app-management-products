import { ProductModel } from '@/models/product/product-model';

export interface ProductRepository {
  findAll(): Promise<ProductModel[]>;
  findSearchName(term: string): Promise<ProductModel[]>;
}
//Interface que define o contrato que deve ser seguido por qualquer repositório de produtos
//Isso representa o conceito de ABSTRAÇÃO, você descreve o comportamento esperado, mas não define como ele sera implementado
