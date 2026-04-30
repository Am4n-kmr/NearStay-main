import mongoose from "mongoose";

const connectDB = async () =>{
    await mongoose.connect(process.env.MONGOURI);
    console.log("MongoDB connected");
}

export default connectDB;