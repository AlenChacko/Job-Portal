import mongoose from "mongoose";

// db connection

const connectDB = async () => {
  mongoose.connection.on("Connected", () => {
    console.log("Database connected");
  });
  await mongoose.connect(`${process.env.MONGO_URI}/`);
};

export default connectDB;
