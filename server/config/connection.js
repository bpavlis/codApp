// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/codAppDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;
//-----------
// const mongoose = require("mongoose");

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;
const mongoose = require("mongoose");
const uri = "mongodb+srv://benpavlis:IcWsM3TEnLTsGMqM@cluster0.evguf1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://benpavlis:IcWsM3TEnLTsGMqM@cluster0.evguf1u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;