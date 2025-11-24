export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
    }catch(err){
        console.log("MongoDB connection error:",err);
    }
}