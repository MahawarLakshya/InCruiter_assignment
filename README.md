

# **User Authentication System (Backend)**  

A Node.js-based authentication system using Express.js, MongoDB, JWT authentication, and secure password hashing.  

---

## **Features**  

- User Registration with hashed passwords.  
- User Login with JWT-based authentication.  
- Password Reset with authentication check.  
- User Logout by clearing authentication tokens.  
- MongoDB Integration for user storage.  
- Secure Authentication using JWT and bcrypt.  

---

## **Tech Stack**  

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB   
- **Authentication:** JWT (JSON Web Token)  
- **Security:** bcrypt for password hashing  
- **Middleware:** CORS, cookie-parser, dotenv  

---

## **Installation Guide**  

### **1. Clone the Repository**  

git clone https://github.com/MahawarLakshya/InCruiter_assignment.git


Move inside your repo


### **2. Install Dependencies**  

npm install


### **3. Setup Environment Variables**  
Create a .env file in the project root and add:  


mongo_uri=your-mongodb-connection-string


secret_key=your-secret-key

- Set up the connection string to MongoDB in mongo_uri.  
- To generate a JWT secret key, run the following command in the terminal:  
  
  node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
  
- Copy and paste the generated key into .env for secret_key.  



### **4. Start the Server**  

node app.js

The server will run at:  
`http://localhost:3000`  

---
## **API Endpoints**  

### **1. User Registration**  
- **Endpoint:** `POST /test/register`  
- **Request Body (JSON):**  
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response:**  
  ```json
  {
    "message": "User registered successfully"
  }
  ```

---

### **2. User Login**  
- **Endpoint:** `POST /test/login`  
- **Request Body (JSON):**  
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword"
  }
  ```
- **Response (on success):**  
  ```json
  {
    "message": "Login successful",
    "token": "jwt_token_here"
  }
  ```
- Sets a cookie (`token`) for authentication.  

---

### **3. Reset Password**  
- **URL:** `POST /test/reset-password`  
- **Request Body:**  
  ```json
  {
    "email": "user@example.com",
    "oldpassword": "oldpassword123",
    "newpassword": "newpassword456"
  }
  ```  
- **Response:**  
  ```json
  {
    "message": "Password updated successfully"
  }
  ```  
- **Note:** Only works if the **old password** is correct.  

---

### **4. Logout User**  
- **URL:** `POST /test/logout`  
- **Response:**  
  ```json
  {
    "message": "Logged out successfully!"
  }
  ```  
- **Note:** This clears the **authentication token**.
