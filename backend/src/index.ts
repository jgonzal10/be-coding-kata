import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.use(express.json());
app.use(errorHandler);

export default app;
