import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
    APP_PORT: z.string()
});


export const env = envSchema.parse(process.env);