import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { DeleteResult, Repository } from "typeorm";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
    constructor(@Inject('PRODUCT_REPOSITORY') private productRepository: Repository<Product>) { }

    async create(product: Product): Promise<Product> {
        let findedProduct = await this.findByName(product.name)

        if (findedProduct.length > 0) {
            throw new HttpException("Product already exists", HttpStatus.BAD_REQUEST
            )
        }

        if (!product) {
            throw new HttpException("Please, fill correctly!", HttpStatus.BAD_REQUEST)
        }

        return await this.productRepository.save(product);
    }

    async findAll(): Promise<Product[]> {
        return await this.productRepository.find({ relations: { category: true } });
    }

    async findById(id: number): Promise<Product> {
        let findedProduct = await this.productRepository.findOne({ where: { id } })

        if (!findedProduct) {
            throw new HttpException("Not Found", HttpStatus.NOT_FOUND)
        }

        return findedProduct;
    }

    async findByName(name: string): Promise<Product[]> {
        if (!name) {
            throw new HttpException("Fill correctly", HttpStatus.BAD_REQUEST)
        }

        return await this.productRepository.find({ where: { name } });
    }

    protected async findCategory(id: number): Promise<Product> {
        return await this.productRepository.findOneBy({ id })
    }

    async update(product: Product): Promise<Product> {
        let findedProduct = await this.findById(product.id);

        return await this.productRepository.save(product);
    }

    async delete(id: number): Promise<DeleteResult> {
        let findedProduct = await this.findCategory(id);

        if (!findedProduct) {
            throw new HttpException("Product not found", HttpStatus.NOT_FOUND);
        }

        return this.productRepository.delete(findedProduct.id);
    }
}