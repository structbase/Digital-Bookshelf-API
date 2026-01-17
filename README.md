# 📚 Digital Bookshelf API

A simple **Node.js + Express + MongoDB** REST API that demonstrates full **CRUD functionality** using **Mongoose**.
This project allows users to create, read, update, and delete books stored in a MongoDB database.

---

## 🚀 Learning Objectives

This project demonstrates the ability to:

* Define a Mongoose schema with validation
* Compile a schema into a Mongoose model
* Build a full CRUD API using Express
* Use modular project structure (db, models, routes)
* Handle request data using `req.body` and `req.params`
* Interact with MongoDB using Mongoose model methods

---

## 🗂 Project Structure

```
digital-bookshelf-api/
├── db/
│   └── connection.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── server.js
├── .env
├── .gitignore
└── package.json
```

---

## 📦 Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/structbase/Digital-Bookshelf-API
cd digital-bookshelf-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Start the server

```bash
node server.js
```

You should see:

```
Successfully connected to MongoDB!
Server running on port 3000
```

---

## 🔗 API Endpoints

Base URL:

```
http://localhost:3000/api/books
```

### ➕ Create a Book

**POST /**

```json
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "isbn": "9780547928227",
  "publishedDate": "1937-09-21"
}
```

### 📖 Get All Books

**GET /**

### 📘 Get One Book

**GET /:id**

### ✏️ Update a Book

**PUT /:id**

```json
{
  "inStock": false
}
```

### 🗑 Delete a Book

**DELETE /:id**

---

## 🧠 Schema Design

**Book Model Fields:**

* `title` (String, required)
* `author` (String, required)
* `isbn` (String, unique)
* `publishedDate` (Date)
* `inStock` (Boolean, default: true)

---

## 🧪 Testing

All endpoints were tested using **Postman / Insomnia** to verify:

* Correct CRUD functionality
* Proper status codes
* Error handling for invalid or missing IDs

---

## 📝 Reflection

* Separating routes, models, and database logic improves maintainability and scalability.
* `PUT` replaces a resource entirely, while `PATCH` updates partial data. This API’s `PUT` behaves more like a partial update.
* After deleting a resource, returning a confirmation message is a clean and efficient response pattern.

---

## ✍️ Author

Developed by **Abenezer**

> Junior Developer