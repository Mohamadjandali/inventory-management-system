import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "code2002",
    database: "test_2",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [],
    subscribers: [],
});
