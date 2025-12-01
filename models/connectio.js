export const connectDB = async () => {
    
    return mongoose.connect("mongodb+srv://abdelazizmo2022_db_user:v9yaYu6yUrjnu178@cluster0.s8gupjm.mongodb.net/nti-tasks-database?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => console.error("MongoDB connection error:", err));
};
