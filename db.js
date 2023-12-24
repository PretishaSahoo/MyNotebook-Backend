const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/latestdb'; // Replace with your actual MongoDB URI use ip of local host instead else it causes error

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to Mongo Successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    // Handle the error appropriately (e.g., exit the application, retry the connection, etc.)
  }
};

module.exports = connectToMongo;
