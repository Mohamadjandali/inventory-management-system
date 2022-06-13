import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm";

import { Transaction } from "./Transaction";

@Entity({ name: "invoices" })
export class Invoice extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int" })
    id: number;

    @Column({ type: "varchar" })
    name: string;

    @OneToOne(() => Transaction)
    @JoinColumn()
    transaction: Transaction;
}
