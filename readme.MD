MERN Bookstore Application 📚

This is a full-stack application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to manage a collection of books. The app includes features for adding, editing, deleting, and viewing books.

Features ✨
Add new books with details like title, author, and publication year.
Edit existing book information.
Delete books from the collection.
Fetch and view a list of all books.
Detailed view of individual book information.

Tech Stack 🛠️
Frontend: React.js, React Router, Axios, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB

Installation and Setup 🚀
Prerequisites
Node.js installed
MongoDB setup locally or using a cloud service like MongoDB Atlas

Steps to Run Locally
Clone the repository:

git clone https://github.com/your-username/mern-bookstore.git
Navigate to the project directory:

cd book-store
Install dependencies:

Backend:
cd server
npm install

Frontend:
cd frontend
npm install
Configure the environment variables:

Create a .env file in the server directory and add your MongoDB connection string:
MONGODB_URI=your-mongo-db-connection-string

PORT=3000
Start the servers:

Backend:
cd backend
npm run dev

Frontend:
cd ../frontend
npm run dev
Open the app in your browser:

Frontend: http://localhost:5173
Backend API: http://localhost:3000


API Endpoints 🔗
GET /books - Fetch all books
POST /books - Add a new book
GET /books/:id - Fetch a book by ID
PUT /books/:id - Update a book by ID
DELETE /books/:id - Delete a book by ID


Home page with the list of books.
Add/Edit Book forms.
Details page of a single book.

Future Enhancements 🌟
Add user authentication and role-based access control.
Implement pagination for the book list.
Add search and filter functionality.
Deploy the app on platforms like Heroku, Vercel, or AWS.


License 📄
This project is licensed under the MIT License.