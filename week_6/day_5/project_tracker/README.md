# 🧠 Project Tracker API

A **modular REST API** built with **Express.js** and **MongoDB (Mongoose)**. Implements **CRUD operations**, **JWT authentication**, and **role-based authorization** (admin/member).

---

## ⚙️ Features

- 🔐 JWT-based authentication (register/login)  
- 👥 Role-based authorization (`admin` / `member`)  
- 📁 Modular architecture: each module has its **model**, **service**, and **route**  
- 📦 CRUD for **projects** (members manage their own; admins manage all)  
- 🧩 ES Modules with **import aliases** (`#@/`)  

---

## 📂 Project Structure

```
src/
  main.js
  databases/
    connect-mongo.js       ← MongoDB connection
  routes/
    index.js
    project/
      index.js
  modules/
    auth/
      model/
        index.js
      services/
        index.js
      index.js
    project/
      model/
        index.js
      services/
        index.js
      index.js
  middlewares/
    auth.js
    roles.js
.env
package.json
README.md
```

---

## ⚡ Installation

### 1️⃣ Clone the repository
```bash
git clone <repository_url>
cd project-tracker
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Create `.env` file
```env
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/project-tracker
JWT_SECRET=your_jwt_secret_here
```

> Ensure MongoDB is running locally or update `MONGO_URL` with a cloud connection string.

### 4️⃣ Start the server
```bash
npm start
```

Expected output:
```
✅ Connected to MongoDB
🚀 Server running on port 5000
```

---

## 🧩 Endpoints

Base URL:
```
http://localhost:5000/api
```

### 🔑 Auth

#### Register User
**POST** `/auth/register`

```json
{
  "name": "Souhail",
  "email": "souhail@example.com",
  "password": "123456",
  "role": "admin"   // optional, defaults to member
}
```

**Response**
```json
{
  "user": {
    "_id": "672f7c91...",
    "name": "Souhail",
    "email": "souhail@example.com",
    "role": "admin"
  }
}
```

#### Login User
**POST** `/auth/login`

```json
{
  "email": "souhail@example.com",
  "password": "123456"
}
```

**Response**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6...",
  "user": {
    "_id": "672f7c91...",
    "name": "Souhail",
    "email": "souhail@example.com",
    "role": "admin"
  }
}
```

> Copy the `token` for all project routes as: `Authorization: Bearer <token>`

---

### 📦 Project Routes

All project routes require **Authorization header**.

#### Create Project
**POST** `/projects`

```json
{
  "name": "Gym Tracker",
  "description": "Track workouts",
  "tasks": [
    { "title": "Push-ups" },
    { "title": "Squats" }
  ]
}
```

**Response**
```json
{
  "project": {
    "_id": "672f800c...",
    "name": "Gym Tracker",
    "description": "Track workouts",
    "owner": "672f7c91...",
    "tasks": [
      { "title": "Push-ups", "done": false },
      { "title": "Squats", "done": false }
    ]
  }
}
```

#### List Projects
**GET** `/projects`
- Members → only their own projects  
- Admins → all projects

#### Get Project by ID
**GET** `/projects/:id`

#### Update Project
**PUT** `/projects/:id`

```json
{
  "description": "Updated project description",
  "tasks": [
    { "title": "Push-ups", "done": true }
  ]
}
```

#### Delete Project
**DELETE** `/projects/:id`

**Response:** `204 No Content`

---

## 👥 Roles

| Role     | Permissions                                |
|----------|--------------------------------------------|
| `member` | CRUD on **own projects only**              |
| `admin`  | CRUD on **all projects**                   |

Middlewares:
- `auth` → JWT validation  
- `isAdminOrOwner` → restrict access to owner or admin

---

## 🧪 Testing

Use **Postman or cURL**:
```bash
curl -X POST http://localhost:5000/api/auth/login \
 -H "Content-Type: application/json" \
 -d '{"email": "souhail@example.com", "password": "123456"}'
```

Set returned `token` as **Authorization: Bearer `<token>`** for project endpoints.

---

## 🧰 HTTP Response Codes

| Code | Meaning            |
|------|------------------|
| 200  | OK                |
| 201  | Created           |
| 204  | No Content        |
| 400  | Bad Request       |
| 401  | Unauthorized      |
| 403  | Forbidden         |
| 404  | Not Found         |
| 409  | Conflict          |
| 500  | Server Error      |

---

## 👨‍💻 Author

**Souhail Boughrioul** – Full Stack Developer (Node.js, Express, MongoDB)

