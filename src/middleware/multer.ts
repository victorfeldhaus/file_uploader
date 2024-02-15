import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.resolve("src/uploads"));
  },
  filename: (req, file, callback) => {
    callback(null, `${new Date().getTime() + '_' + file.originalname}`);
  }
});

export const upload = multer({ storage: storage });


