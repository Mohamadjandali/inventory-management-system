import {
    BaseEntity,
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from "typeorm";
import { Inventory } from "./Inventory";
import { Item } from "./Item";
import { Transaction } from "./Transaction";

@Entity({ name: "products" })
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar" })
    name: string;

    @ManyToOne(() => Inventory, (inventory) => inventory.products, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "inventory_id" })
    inventory: Inventory;

    @ManyToOne(() => Transaction, (transaction) => transaction.products)
    transaction: Transaction;

    @OneToMany(() => Item, (item) => item.product)
    items: Item[];
}
