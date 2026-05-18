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
      ...product,
      id: Math.floor(Math.random()*1000)+1,
      
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
  update(id: string, updatedProductoDto: ProductDto): any {
    const product: ProductDto = this.products!
        .find(product=>product.id===Number(id))!;
    if (!product){
      return
    }
  Object.assign(product,updatedProductoDto)
  return product
  }

  deleteById(id:string):any{
  const index = this.products!
        .findIndex(product=>product.id===Number(id))!;
  if (index === -1){
    return;
  }
  const deletedProduct=this.products[index]
  this.products.splice(index,1);
  return deletedProduct
  }

  areaTriangulo(data: any): any{
    const area = (data.base * data.altura)/2;
    return{
      "base": data.base,
      "altura": data.altura,
      "areaTriangulo": area,
    };
  }

}

