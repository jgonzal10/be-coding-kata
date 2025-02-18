import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router);
app.use(express.json());

export default app;