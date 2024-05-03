import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { Category } from "./category.entity";

@Injectable()
export class CategoryService {
    constructor(@Inject('CATEGORY_REPOSITORY') private categoryRepository: Repository<Category>) { }

    async create(category: Category): Promise<Category> {
        let findedCategory = await this.findByName(category.name)

        if (findedCategory.length > 0) {
            throw new HttpException("Category already exists", HttpStatus.BAD_REQUEST
            )
        }

        if (!category) {
            throw new HttpException("Please, fill correctly!", HttpStatus.BAD_REQUEST)
        }

        return await this.categoryRepository.save(category);
    }

    async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find({ relations: { products: true } });
    }

    async findById(id: number): Promise<Category> {
        let findedCategory = await this.categoryRepository.findOne({ where: { id }, relations: { products: true } })

        if (!findedCategory) {
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND)
        }

        return findedCategory;
    }

    async findByName(name: string): Promise<Category[]> {
        if (!name) {
            throw new HttpException("Fill correctly", HttpStatus.BAD_REQUEST)
        }

        return await this.categoryRepository.find({ where: { name }, relations: { products: true } });
    }

    protected async findCategory(id: number): Promise<Category> {
        return await this.categoryRepository.findOneBy({ id })
    }

    async update(category: Category): Promise<Category> {
        let findedCategory = await this.findById(category.id);

        return await this.categoryRepository.save(category);
    }

    async delete(id: number): Promise<DeleteResult> {
        let findedCategory = await this.findCategory(id);

        if (!findedCategory) {
            throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
        }

        return this.categoryRepository.delete(findedCategory.id);
    }
}