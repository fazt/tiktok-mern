import { Router } from "express";

const router = Router();

router.post("/videos", (req, res) => {
  const { title, description } = req.body;
  const { video } = req.files as any;

  console.log(title, description, video);

  video.mv(`uploads/${video.name}`);

  res.send("Received");
});

export default router;
