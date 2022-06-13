import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import { Inventory } from "./entities/Inventory";
import { Transaction } from "./entities/Transaction";
import { Invoice } from "./entities/Invoice";
import { Item } from "./entities/Item";
import { Order } from "./entities/Order";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "code2002",
    database: "test_2",
    synchronize: true,
    logging: false,
    entities: [Product, Inventory, Transaction, Invoice, Item, Order],
    migrations: [],
    subscribers: [],
});
