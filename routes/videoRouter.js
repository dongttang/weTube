import express from "express";
import routes from "../routes";
import { video, videoUpload, videoDetail, editVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.video, video);
videoRouter.get(routes.videoUpload, videoUpload);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.editVideo, editVideo);

export default videoRouter;
