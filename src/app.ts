import express from "express";
const app = express();

import { AppDataSource } from "../database/data-source";

const main = async () => {
    try {
        const result = await AppDataSource.initialize();
        console.log(result);
        app.listen(5000, () => console.log("server running on port 5000"));
    } catch (err) {
        console.log(err);
    }
};

main();
