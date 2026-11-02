const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('👉 Make sure you have set a valid MONGO_URI in your .env file.');
    console.error('👉 If you are using MongoDB Atlas, verify your IP is whitelisted (0.0.0.0/0).');
    // We don't exit process in development if we want the server to still serve health checks
  }
};

module.exports = connectDB;
