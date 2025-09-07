// import mongoose from "mongoose";

// const connectToDatabase = async () => {
//     try{
//         await mongoose.connect(process.env.MONGODB_URL)
//     }catch(error){
//         console.log(error)
//     }
// }

// export default connectToDatabase

import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("✅ MongoDB connected successfully!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};

export default connectToDatabase;

