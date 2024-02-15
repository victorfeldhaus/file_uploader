import { Application } from 'express';
import { UPLOAD } from "../../routes/endpoints.json";
import { upload } from "../../middleware/multer";
import { uploadFile } from "../controller";


export const uploadFileRoutes = (app: Application) => {
    app.post(
        UPLOAD.FILE,
        upload.single("file"),
        uploadFile
        );
};