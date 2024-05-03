import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { Category } from "./category.entity";
import { DeleteResult } from "typeorm";

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    @HttpCode(HttpStatus.OK)
    createCategory(@Body() category: Category): Promise<Category> {
        return this.categoryService.create(category);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAllCategory(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get('/id/:id')
    @HttpCode(HttpStatus.OK)
    findCategoryById(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoryService.findById(id);
    }

    @Get('/name/:name')
    @HttpCode(HttpStatus.OK)
    findCategoryByName(@Param('name') name: string): Promise<Category[]> {
        return this.categoryService.findByName(name);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updateCategory(@Body() category: Category): Promise<Category> {
        return this.categoryService.update(category);
    }

    @Delete('/delete/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteCategory(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
        return this.categoryService.delete(id);
    }
}