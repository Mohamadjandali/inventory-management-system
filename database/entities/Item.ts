import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Product } from "./Product";

@Entity({ name: "items" })
export class Item {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar" })
    code: string;

    @Column({ type: "varchar" })
    brand: string;

    @Column({ type: "varchar" })
    measure: string;

    @Column({ type: "int" })
    quantity: number;

    @Column({ type: "varchar" })
    material: string;

    @Column({ type: "numeric" })
    unitPrice: number;

    @Column({ type: "numeric" })
    totalBalance: number;

    @ManyToOne(() => Product, (product) => product.items)
    @JoinColumn({ name: "product_id" })
    product: Product;
}
