import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { Item } from "./Item";
import { Transaction } from "./Transaction";

@Entity({ name: "orders" })
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @ManyToOne(() => Item, (item) => item.orders)
    item: Item;

    @ManyToOne(() => Transaction, (transaction) => transaction.orders)
    transaction: Transaction;

    @Column({ type: "numeric" })
    quantity: number;
}
