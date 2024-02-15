import { Application } from "express";
import { uploadFileRoutes } from "../upload_file/routes";

export const routes = (app: Application) => {
    uploadFileRoutes(app);
};