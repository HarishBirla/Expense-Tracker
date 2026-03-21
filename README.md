\# Expense Tracker (Full-Stack)



A simple full-stack Expense Tracker application built using React (frontend) and Node.js with Express (backend).  

This application allows users to add, view, and delete expenses through a clean UI and REST API integration.



\---



\## 🚀 Features



\- Add new expenses (title \& amount)

\- View all expenses dynamically

\- Delete expenses

\- Real-time UI updates

\- REST API communication between frontend and backend



\---



\## 🧠 Project Structure



expense-tracker/

├── client/ # Frontend (React)

│ └── src/

│ ├── components/

│ ├── App.js

│ └── api.js

│

├── server/ # Backend (Node.js + Express)

│ └── server.js

│

├── README.md

└── .gitignore





\---



\## ⚙️ Tech Stack



\### Frontend:

\- React.js

\- JavaScript

\- Fetch API



\### Backend:

\- Node.js

\- Express.js



\---



\## 🔄 How It Works



1\. User enters expense details in the frontend

2\. Frontend sends a request to backend API

3\. Backend processes and stores expense data (in-memory)

4\. Backend returns updated data

5\. Frontend updates UI dynamically



\---



\## 🔌 API Endpoints



| Method | Endpoint        | Description        |

|--------|---------------|-------------------|

| GET    | /expenses      | Get all expenses  |

| POST   | /expenses      | Add new expense   |

| DELETE | /expenses/:id  | Delete expense    |



\---



\## 🧪 Sample Data Flow



\- Add Expense → POST request → backend stores data  

\- Fetch Expenses → GET request → display in UI  

\- Delete Expense → DELETE request → update UI  



\---



\## ⚠️ Limitations



\- Data is stored in memory (not persistent)

\- No authentication system

\- Basic UI (focus on functionality)



\---



\## 🔮 Future Improvements



\- Integrate MongoDB for persistent storage

\- Add user authentication

\- Add charts and analytics

\- Improve UI/UX design



\---



\## 🎯 Purpose of Project



This project was built to understand:

\- Full-stack development basics

\- API integration

\- Client-server communication

\- CRUD operations



\---



\## 👨‍💻 Author



Harish



