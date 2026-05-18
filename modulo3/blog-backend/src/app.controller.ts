import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product_dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHeath(): any {
    return this.appService.getHeath();
  }
  @Post("/products")
  createProduct(@Body() product: ProductDto): ProductDto {
    return this.appService.createProduct(product);
  }

  @Get("/products")
  findAll(): ProductDto[]{
    return this.appService.findAll();
  }

  @Get("/products/:id")
  findById(@Param('id') id: string): ProductDto {
    return this.appService.findById(id);
  }

  @Put("/products/:id")
  update(@Param('id') id: string,
    @Body() updatedProduct: ProductDto) : any
  {
    return this.appService.update(
      id,
      updatedProduct
    );
  }

  @Delete("/products/:id")
  deleteById(@Param('id') id: string):ProductDto
  {
    return this.appService.deleteById(id);
  }

  @Post("/area-triangulo")
  areaTriangulo(@Body()data:any): any {
    return this.appService.areaTriangulo(data);
  }


}
