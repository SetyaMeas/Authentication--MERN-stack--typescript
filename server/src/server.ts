import express, { Application, Response, Request } from "express";
import cors, { CorsOptions } from "cors";
import connectToDatabase from "./mongodb/connect";
import router from "./routes/index";

const app: Application = express();
const port: number = 5000;
const corsOpt: CorsOptions = {
  origin: "http://localhost:5173",
}

app.use(cors(corsOpt));
connectToDatabase();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
app.all("*", (req: Request, res: Response) => {
  res.status(404).send("Page not found");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

