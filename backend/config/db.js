import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://adnaanjanees0:adnaan2003@cluster0.dvscib5.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}