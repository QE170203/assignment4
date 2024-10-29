const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Replace with your actual MongoDB URI
        await mongoose.connect("mongodb+srv://assignment1:123123123@thucluster0.9hej0.mongodb.net/assignment", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;
