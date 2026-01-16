const mongoose = require("mongoose");

// Destructure Schema from mongoose
const { Schema } = mongoose;

/**
 * Defines the structure and validation rules for the 'books' collection.
 * MongoDB is normally schemaless, but Mongoose enforces this structure at the app level.
 */
const bookSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"], // Custom error message if title is missing
    },
    author: {
        type: String,
        required: [true, "Author is required"], // Fixed typo in "Auther"
    },
    isbn: {
        type: String,
        unique: true, // Ensures no two books share the same ISBN in the database
    },
    publishedDate: Date,
    inStock: {
        type: Boolean,
        default: true, // Automatically sets to true if not specified
    },
});

/**
 * Compiles the schema into a Model.
 * The first argument "Book" will automatically create a collection named "books" (plural).
 */
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
