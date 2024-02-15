import express from "express";
import dotenv from "dotenv";
import { routes } from "../routes";
import { env } from "../env/env";

dotenv.config();

const app = express();

export const server = () => {

    routes(app);

    app.listen(env.APP_PORT, () => console.log("Server is running.."));
};