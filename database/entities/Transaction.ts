import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
} from "typeorm";
import { Order } from "./Order";

export enum TransactionTypes {
    BUY = "buy",
    SELL = "sell",
}

@Entity({ name: "transactions" })
export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar" })
    costumer: string;

    @Column({
        type: "enum",
        enum: TransactionTypes,
    })
    type: TransactionTypes;

    @Column({ type: "date" })
    transactionDate: Date;

    @OneToMany(() => Order, (order) => order.transaction)
    orders: Order[];
}
