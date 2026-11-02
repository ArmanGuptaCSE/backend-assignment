# Backend Web Development CRUD API (Node.js, Express & MongoDB)

A complete RESTful API built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)** following the Model-Route-Controller (MRC/MVC) architectural pattern.

This project implements full **CRUD (Create, Read, Update, Delete)** operations and is structured for the backend assignment following the freeCodeCamp tutorial: [Intro to Backend Web Development](https://www.youtube.com/watch?v=KOutPbKc9UM).

---

## 📁 Project Architecture & Folder Structure

```text
backend-assignment/
├── config/
│   └── db.js                 # MongoDB connection logic using Mongoose
├── controllers/
│   └── userController.js     # Business logic for all CRUD operations
├── models/
│   └── userModel.js          # Mongoose schema and model for Users
├── routes/
│   └── userRoutes.js         # API endpoints mapping routes to controller functions
├── .env                      # Environment variables (PORT, MONGO_URI) - DO NOT COMMIT
├── .env.example              # Sample environment variables template
├── .gitignore                # Git ignore configuration
├── package.json              # Project dependencies and npm scripts
├── postman_collection.json   # Exported Postman collection for instant API testing
├── server.js                 # Express server configuration and main entry point
└── README.md                 # Project documentation
```

---

## 🛠️ Tech Stack & Dependencies

- **Node.js**: JavaScript runtime environment
- **Express.js**: Fast, minimalist web framework for Node
- **MongoDB & Mongoose**: NoSQL database and Object Data Modeling (ODM) library
- **dotenv**: Loads environment variables from `.env` file
- **cors**: Middleware for enabling Cross-Origin Resource Sharing
- **nodemon**: Dev tool that automatically restarts the server on file changes
- **Postman**: API testing client

---

## 🚀 3-Step Execution & Submission Guide

### Step 1: Fix PowerShell Execution Policy & Environment Setup

If PowerShell blocked `npm` with `npm.ps1 cannot be loaded because running scripts is disabled on this system`, run this command in your PowerShell terminal:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

*(This grants your current Windows user permission to run signed developer scripts like npm and nodemon safely without altering global machine policies).*

Alternatively, you can run commands directly using `npm.cmd` (e.g., `npm.cmd run dev`).

Next, configure your `.env` file in the project root:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/backend_assignment?retryWrites=true&w=majority
```

---

### Step 2: Setup MongoDB Atlas (Online Free Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Build a Database: Select the **M0 Free Tier** cluster (choose AWS and your closest region, e.g. Mumbai / N. Virginia) and click **Create**.
3. **Database Access (User Credentials)**:
   - Create a Username (e.g. `arman`) and Password (e.g. `password123` — remember this password).
   - Click **Create User**.
4. **Network Access (IP Whitelist)**:
   - Go to **Network Access** tab on the left.
   - Click **Add IP Address** -> Select **Allow Access from Anywhere** (`0.0.0.0/0`).
   - Click **Confirm**.
5. **Get Connection String**:
   - Go to **Database** tab -> Click **Connect**.
   - Choose **Drivers** (Node.js).
   - Copy the connection string format:
     ```text
     mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/?retryWrites=true&w=majority
     ```
   - Replace `<username>` and `<password>` with the credentials created in step 3, and add a database name (e.g. `/backend_assignment` before the `?`).
   - Paste it into your `.env` file as `MONGO_URI`.

Now, start your server:
```powershell
npm run dev
```
You should see:
```text
🚀 Server is running on port 5000
🌐 Base URL: http://localhost:5000
✅ MongoDB Connected: cluster0-shard-00-00.mongodb.net
```

---

### Step 3: Test with Postman & Push to GitHub

#### A. Testing with Postman
1. Open the **Postman** desktop application.
2. Click **Import** (top left) and select the `postman_collection.json` file located in this repository.
3. You will see a collection named **`Backend Assignment CRUD APIs`** containing all 6 requests:
   - `1. Server Health Check` -> `GET http://localhost:5000/`
   - `2. Create User (POST)` -> `POST http://localhost:5000/api/users`
   - `3. Get All Users (GET)` -> `GET http://localhost:5000/api/users`
   - `4. Get User by ID (GET)` -> `GET http://localhost:5000/api/users/<USER_ID>`
   - `5. Update User (PUT)` -> `PUT http://localhost:5000/api/users/<USER_ID>`
   - `6. Delete User (DELETE)` -> `DELETE http://localhost:5000/api/users/<USER_ID>`

#### B. Push to GitHub for Assignment Submission
1. In the project folder, initialize git and commit your code:
   ```powershell
   git init
   git add .
   git commit -m "feat: complete backend tutorial CRUD implementation with Express & MongoDB"
   git branch -M main
   ```
2. Create a new public repository on [GitHub](https://github.com/new) named `backend-assignment`.
3. Link and push your local repository:
   ```powershell
   git remote add origin https://github.com/ArmanGuptaCSE/backend-assignment.git
   git push -u origin main
   ```
4. Copy your GitHub repository URL:
   `https://github.com/ArmanGuptaCSE/backend-assignment`
   and submit it for your evaluation!

---

## 📡 API Reference & Endpoints

| Method | Endpoint | Description | Request Body (JSON) | Status Code |
| :--- | :--- | :--- | :--- | :--- |
| **GET** | `/` | API status & endpoint guide | None | `200 OK` |
| **GET** | `/api/health` | Server health check | None | `200 OK` |
| **POST** | `/api/users` | Create a new user | `{ "name": "Arman", "email": "arman@example.com", "age": 22 }` | `201 Created` |
| **GET** | `/api/users` | Fetch all users | None | `200 OK` |
| **GET** | `/api/users/:id` | Fetch single user by ID | None | `200 OK` / `404 Not Found` |
| **PUT** | `/api/users/:id` | Update user by ID | `{ "name": "Arman Gupta", "age": 23 }` | `200 OK` / `404 Not Found` |
| **DELETE**| `/api/users/:id` | Delete user by ID | None | `200 OK` / `404 Not Found` |

---

## 🧪 Sample Payloads for Manual Postman / cURL Testing

### 1. Create User
- **Method**: `POST`
- **URL**: `http://localhost:5000/api/users`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "name": "Arman Gupta",
  "email": "arman@example.com",
  "age": 22,
  "role": "user"
}
```

### 2. Update User
- **Method**: `PUT`
- **URL**: `http://localhost:5000/api/users/<USER_ID>`
- **Headers**: `Content-Type: application/json`
- **Body**:
```json
{
  "name": "Arman Gupta (Updated)",
  "age": 23
}
```

### 3. Delete User
- **Method**: `DELETE`
- **URL**: `http://localhost:5000/api/users/<USER_ID>`
