import { Router } from "express";
import tiktokModel from "../models/tiktok.model";
import TiktokModel from "../models/tiktok.model";

const router = Router();

router.get("/videos", async (req, res) => {
  const tiktoks = await tiktokModel.find();
  res.json(tiktoks);
});

router.post("/videos", (req, res) => {
  const { title, description } = req.body;
  const { video } = req.files as any;

  video.mv(`uploads/${video.name}`);

  const newTiktok = new tiktokModel({
    title,
    description,
    video: `uploads/${video.name}`,
  });

  newTiktok.save();

  res.json(newTiktok);
});

export default router;
