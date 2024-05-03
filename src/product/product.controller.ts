import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
import { DeleteResult } from "typeorm";

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    createProduct(@Body() product: Product): Promise<Product> {
        return this.productService.create(product);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAllProduct(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get('/id/:id')
    @HttpCode(HttpStatus.OK)
    findProductById(@Param('id', ParseIntPipe) id: number): Promise<Product> {
        return this.productService.findById(id);
    }

    @Get('/name/:name')
    @HttpCode(HttpStatus.OK)
    findProductByName(@Param('name') name: string): Promise<Product[]> {
        return this.productService.findByName(name);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateProduct(@Body() Product: Product): Promise<Product> {
        return this.productService.update(Product);
    }

    @Delete('/delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.productService.delete(id);
    }
}