require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const bookRoutes = require("./routes/movieRoutes");


const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
