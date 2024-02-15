import { Request, Response } from "express";

export const uploadFile = (req: Request, res: Response) => {
    return res.status(201).json(req.file?.filename);
};