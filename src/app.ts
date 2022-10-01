import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import path from "path";

import videoRoutes from "./routes/videos.routes";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());
app.use(
  fileUpload({
    tempFileDir: "./uploads",
    useTempFiles: true,
    preserveExtension: true,
    safeFileNames: true,
  })
);

app.use(videoRoutes);
app.use(authRoutes);

console.log(path.join(__dirname, "../uploads"));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

export default app;
