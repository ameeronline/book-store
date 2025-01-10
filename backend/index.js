import express from "express";
import { PORT } from "./config/config.js";
import { mongoDBURL } from "./config/connection.js";
import mongoose from "mongoose";
import booksRoute from "./routes/books-route.js";
import cors from "cors";

const app = express();

// Middleware to parse JSON request body
app.use(express.json()); 

// Middleware to enable CORS
// Allow all origins with default of Cors
app.use(cors()); 

// Allow only localhost:3000 with specific methods and headers
// app.use(cors(
//   {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   }
// ))

// Route for the root of the server
app.get("/", (req, res) => {
  console.log(req);
  return res.status(200).send("Welcome to Book Store");
});

// Use the router for all books routes
app.use("/books", booksRoute);

// Connect to MongoDB and start the server
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log("Server is running on port 3000"));
  })
  .catch((err) => {
    console.log(err);
  });
