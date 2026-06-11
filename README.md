# Expense Tracker (Full-Stack)

A simple full-stack Expense Tracker application built using **React.js** for the frontend and **Node.js with Express.js** for the backend. The application allows users to add, view, and delete expenses through a clean user interface and REST API integration.

---

## 🚀 Features

* Add new expenses (title & amount)
* View all expenses dynamically
* Delete existing expenses
* Real-time UI updates
* REST API communication between frontend and backend

---

## 📁 Project Structure

```text
expense-tracker/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   └── api.js
│
├── server/
│   └── server.js
│
├── README.md
└── .gitignore
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Fetch API

### Backend

* Node.js
* Express.js

---

## ⚙️ How It Works

1. User enters expense details in the frontend.
2. Frontend sends a request to the backend API.
3. Backend processes and stores the expense data (in memory).
4. Backend returns the updated expense list.
5. Frontend updates the UI automatically.

---

## 🔌 API Endpoints

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | `/expenses`     | Retrieve all expenses |
| POST   | `/expenses`     | Add a new expense     |
| DELETE | `/expenses/:id` | Delete an expense     |

---

## 📊 Sample Workflow

* Add Expense → POST request → Backend stores data
* Fetch Expenses → GET request → Display in UI
* Delete Expense → DELETE request → Update UI

---

## ⚠️ Limitations

* Data is stored in memory and is lost when the server restarts.
* No database integration.
* No authentication or authorization.
* Basic UI focused on functionality.

---

## 🔮 Future Improvements

* Integrate MongoDB for persistent storage
* Add user authentication and authorization
* Implement expense categories
* Add charts and analytics
* Improve UI/UX
* Add edit/update expense functionality

---

## 🎯 Purpose

This project was built to learn and practice:

* Full-stack development
* REST API creation and consumption
* Client-server communication
* CRUD operations
* React and Express integration

---

## 👨‍💻 Author

**Harish Birla**
birlaharish3@gmail.com

Feel free to fork this repository and contribute or suggest improvements.
