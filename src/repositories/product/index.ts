import { JsonProductRepository } from './json-product-repository';
import { ProductRepository } from './product-repository';

export const productRepository: ProductRepository = new JsonProductRepository();

//Instância concreta de JsonProductRepository que expõe os metodos e atribuição a variável tipada pela interface ProductRepository
//Aqui temos a injeção de dependência explicita
