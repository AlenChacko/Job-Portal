import mongoose from "mongoose";

// db connection

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Database connected");
  });
  await mongoose.connect(`${process.env.MONGO_URI}/InsideJobs`);
};

export default connectDB;
