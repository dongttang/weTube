import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routes from "./routes";
import globalRouter from "./routes/globalRouter";
import userRouter from "./routes/userRouter";
import videoRouter from "./routes/videoRouter";

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.text({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use(routes.user, userRouter);
app.use(routes.video, videoRouter);

export default app;