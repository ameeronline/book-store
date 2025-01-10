import express from "express";
import { Book } from "../models/book-model.js";

// Create a new router
const router = express.Router();

// Route to save a new book
router.post("/", async (req, res) => {
  try {
    const { title, author, publishYear } = req.body;

    if (!title || !author || !publishYear) {
      return res.status(400).send("Missing required fields");
    }

    const newbook = { title, author, publishYear };
    const book = await Book.create(newbook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route to get all books from the database
router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route to a get book by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).send("Book not found");
    } else {
      return res.status(200).json(book);
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route to update a book by id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title && !req.body.author && !req.body.publishYear) {
      return res.status(400).send("Missing required fields");
    }

    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).send("Book not found");
    }else{
      return res.status(200).send("Book updated successfully");
    }

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
});

// Route to delete a book by id
router.delete("/:id", async (req, res) =>{
  try{
    const {id} = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result){
      return res.status(404).send("Book not found");
    }
    return res.status(200).send("Book deleted successfully");

  }catch(error){
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
})

export default router;
