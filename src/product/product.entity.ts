import { IsDateString, IsNumber, IsString, Length } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "../category/category.entity";

@Entity({name: 'products'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @Length(3, 64)
    name: string;

    @Column()
    @IsString()
    @Length(3, 128)
    descriptions: string;

    @ManyToOne(() => Category, (category) => category.products)
    category: Category

    @Column({ type: "decimal", precision: 6, scale: 2 })
    @IsNumber()
    price: number;

    @Column()
    @IsNumber()
    quantity:number;

    @Column()
    @IsDateString()
    expirationDate: Date;
}