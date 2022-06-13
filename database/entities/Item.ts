import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity({ name: "items" })
export class Item extends BaseEntity {
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
    product: Product;

    @OneToMany(() => Order, (order) => order.item)
    orders: Order[];
}
