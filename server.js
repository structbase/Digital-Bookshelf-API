require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connection");
const PORT = process.env.PORT;
const app = express();
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
