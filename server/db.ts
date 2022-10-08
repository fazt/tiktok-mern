import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://database:27017/tiktokmern");
    console.log(">>> DB is connected");
  } catch (error) {
    console.error(error);
  }
}
