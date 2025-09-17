import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodb).then(() => {
      console.log("Connected to Mongodb Data Base");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
