import mongoose from "mongoose";

let isConnected: boolean = false;

export async function connectedToDB() {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI)
    return console.log("MONGODB_URI is not defined");

  if (isConnected) return console.log("=> using existing database connection");

  try {
    mongoose.connect(process.env.MONGODB_URI, {});

    isConnected = true;
    console.log("MongoDB Connection"); 
  } catch (error) {
    console.log(error);
  }
}
