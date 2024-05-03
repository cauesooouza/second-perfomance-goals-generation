import { IsString, Length } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "../product/product.entity";

@Entity({name:'categories'})
export class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @Length(3,64)
    name:string;

    @Column()
    @IsString()
    @Length(8,128)
    description:string;

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    modifiedAt: Date;

    @OneToMany(() => Product, (product) => product.category, {
        onDelete: "CASCADE"
    })
    products: Product[]
}