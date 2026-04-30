import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
connectDB();

app.listen(process.env.PORT,()=>{
    console.log("NearStay's server is running!");
})