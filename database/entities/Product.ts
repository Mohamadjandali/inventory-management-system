import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryColumn("int")
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column()
    code: string;

    @Column()
    brand: string;

    @Column()
    inventory_id: number;

    @Column()
    material: string;

    @Column()
    quantity: number;

    @Column()
    measure: string;

    @Column()
    unit_price: number;

    @Column()
    total_balance: number;
}
