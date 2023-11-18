import mongoose from "mongoose";
import { dataBaseUri } from "../secret/data";

export default function connectToDatabase(): void {
  
  mongoose.connect(dataBaseUri)
    .then(() => console.log("Connected to Database"))
    .catch(err => console.error("Can't connect to Database"));
};