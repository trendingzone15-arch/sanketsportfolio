import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("  MONGODB_URI  not found");
}

const isConnected:boolean = false; 

export async function connectDB(): Promise<void> {
  if (isConnected) {
    console.log("MongoDB already connected");
    return;
  }

  try {
 
mongoose.connect(MONGODB_URI)
  .then(() => console.log("Connected to database"))
  .catch(err => console.log("Error connecting to database", err));
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw new Error("MongoDB connection error");
  }
}
