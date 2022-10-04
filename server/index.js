import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js";
import dotenv from 'dotenv'
dotenv.config();
let app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: "true" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: "true" }));
app.get('/',(req,res)=>{
  res.send('hello, welcome to my portfolio')
})
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_DB)
  .then(() =>
    app.listen(PORT, () =>
      console.log("app is running at 4000 and mongo db is connected too")
    )
  )
  .catch((err) => console.log(err));

app.use("/api", router);
