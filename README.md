# 📘 Users API

A simple RESTful API built with Node.js and Express for serving user data. Supports search, filtering, and user portfolio grouping.

## 🚀 Features

- Retrieve all users
- Search users by username
- Limit number of returned users
- Fetch user by ID
- Filter users by portfolio
- CORS enabled
- Custom 404 route handler

## 🛠️ Technologies Used

- Node.js
- Express.js
- CORS

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/users-api.git

# Navigate into the project directory
cd users-api

### Install dependencies
npm install
```

### ▶️ Running the Server
```
npm start
```
The server will start on: 
#### http://localhost:5000

## 📚 API Endpoints
### 1. GET /
Returns a homepage with a link to /api/v1/users.

Response:
```
<h1>Users Api</h1><a href='/api/v1/users'>Users</a>
``` 
### 2. GET /api/v1/users
Returns all users. Supports optional search and limit query parameters.

#### Query Parameters:

search – Filter usernames starting with the query

limit – Limit the number of users returned

```
/api/v1/users?search=em&limit=5
```

### 3. GET /api/v1/users/:id
Returns a single user by ID.

Example:

/api/v1/users/3
Response (200):

```
{
        "id": 110,
        "username": "Halima",
        "email": "halima110@example.com",
        "age": 40,
        "isVerified": true,
        "walletAddress": "KOymw5ee6rc9eub13uot91fffk6rp6esvvtoeorc59myptv6pruvsp1mvsaatdz50",
        "balance": 83337,
        "canWithdraw": true,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    }

```   
#### Response (404):

```
{
  "msg": "User not found"
}
```
### 4. GET /api/v1/users-portfolio/:portfolio
Returns users belonging to a specific portfolio (e.g. frontend, backend, designer).

### Example:

/api/v1/users-portfolio/amateur
Response (200):

```
[{
        "id": 109,
        "username": "Zainab",
        "email": "zainab109@example.com",
        "age": 22,
        "isVerified": false,
        "walletAddress": "KOvy2k5v2pqozf3arxafshjosjzw0xjbvlofr7vqnbn4x0gbjuq85j4ryyggoyc5a",
        "balance": 44090,
        "canWithdraw": false,
        "portfolio": "amatuer",
        "joinedAt": "7/20/2025"
    }]
```
Response (404):

```
{
  "msg": "not a valid portfolio"
}
5. Wildcard Route
```
Any undefined route returns: Response (404)

```
{
  "status": 404,
  "msg": "Resource not found"
}
```
### 📁 Project Structure
```
.
├── users.js            # User data (local JSON or JS array)
├── index.js            # Main server file
├── package.json
└── README.md
```
### 📝 Note
POST, PUT, DELETE operations are not supported in this version.


### 📫 Contact
Created by [Your Name]
For feedback or contributions, feel free to open an issue or PR.

