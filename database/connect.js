const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connected_db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`Database Connected : ${connected_db.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}
module.exports = connectDB;