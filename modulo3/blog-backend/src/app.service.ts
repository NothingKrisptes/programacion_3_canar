import { Injectable } from '@nestjs/common';
import { ProductDto } from './product_dto';

@Injectable()
export class AppService {
  private products : ProductDto[] = [
     {
      id: 1,
      name: "Laptop HP",
      price: 850,
      stock: 15
    },
    {
      id: 2,
      name: "Impresora",
      price: 1500,
      stock: 5
    }
  ]
  getHeath(): any {
    return{
      "status":"Online",
      "service":"blog service api",
      "version":"0.0.1",
      "date": new Date()
    };
  }
  createProduct(product: ProductDto): ProductDto {
    const newProduct: ProductDto = {
      id: Math.floor(Math.random()*1000)+1,
      ...product
    } 
    this.products.push(newProduct);
    return{
      "id": newProduct.id,
      "name": newProduct.name,
      "price": newProduct.price,
      "stock": 10
    };
  }

  findAll(): ProductDto[]{
    return this.products;
  }

  findById(id: string): ProductDto{
    return this.products!
        .find(product=>product.id===Number(id))!;
  }
}
