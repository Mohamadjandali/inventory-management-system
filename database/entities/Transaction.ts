import {
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    ManyToOne,
    OneToMany,
} from "typeorm";
import { Product } from "./Product";

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

    @Column({ type: "int" })
    quantity: number;

    @Column({ type: "date" })
    transactionDate: Date;

    @OneToMany(() => Product, (product) => product.transaction)
    products: Product[];
}
