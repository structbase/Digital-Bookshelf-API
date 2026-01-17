const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

/**
 * @route   POST /api/books
 * @desc    Create a new book entry in the database
 * @access  Public
 */
router.post("/", async (req, res) => {
    try {
        // req.body contains the book details parsed from the JSON request
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        // Status 400 is used for validation errors 
        res.status(400).json({ error: err.message });
    }
});

/**
 * @route   GET /api/books
 * @desc    Retrieve all books from the collection
 * @access  Public
 */
router.get("/", async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @route   GET /api/books/:id
 * @desc    Retrieve a single book by its MongoDB Unique ID
 * @access  Public
 */
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(book);
    } catch (err) {
        // CastError (invalid ID format) will trigger the catch block
        res.status(400).json({ error: "Invalid ID format or database error" });
    }
});

/**
 * @route   PUT /api/books/:id
 * @desc    Update an existing book's details
 * @access  Public
 */
router.put("/:id", async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            // { new: true } returns the updated document instead of the old one
            // { runValidators: true } ensures the update follows the Schema rules
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

/**
 * @route   DELETE /api/books/:id
 * @desc    Remove a book from the database
 * @access  Public
 */
router.delete("/:id", async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);

        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
