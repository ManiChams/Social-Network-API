# Social-Network-API

## Description

The Social-Network-API is a backend application for a social networking platform. It provides RESTful API endpoints to manage users, thoughts, reactions, and friendships. The application is built using Node.js, Express.js, and MongoDB with Mongoose as the ODM (Object Data Modeling) library.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
- [Models](#models)
  - [User](#user)
  - [Thought](#thought)
  - [Reaction](#reaction)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/social-network-api.git
    ```
2. Navigate to the project directory:
    ```sh
    cd social-network-api
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the MongoDB server (make sure MongoDB is installed and running on your machine):
    ```sh
    mongod
    ```
5. Start the application:
    ```sh
    npm start
    ```

## Usage

The API server will be running on `http://localhost:3001`. You can use tools like Postman or Insomnia to test the API endpoints.

## API Endpoints

### Users

- **Get all users**
  - `GET /api/users`
- **Get a single user by ID**
  - `GET /api/users/:userId`
- **Create a new user**
  - `POST /api/users`
- **Update a user by ID**
  - `PUT /api/users/:userId`
- **Delete a user by ID**
  - `DELETE /api/users/:userId`
- **Add a friend to a user's friend list**
  - `POST /api/users/:userId/friends/:friendId`
- **Remove a friend from a user's friend list**
  - `DELETE /api/users/:userId/friends/:friendId`

### Thoughts

- **Get all thoughts**
  - `GET /api/thoughts`
- **Get a single thought by ID**
  - `GET /api/thoughts/:thoughtId`
- **Create a new thought**
  - `POST /api/thoughts`
- **Update a thought by ID**
  - `PUT /api/thoughts/:thoughtId`
- **Delete a thought by ID**
  - `DELETE /api/thoughts/:thoughtId`
- **Add a reaction to a thought**
  - `POST /api/thoughts/:thoughtId/reactions`
- **Remove a reaction from a thought**
  - `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`

## Models

### User

- `username` (String, required, unique, trimmed)
- `email` (String, required, unique, must match email format)
- `thoughts` (Array of ObjectId, references Thought model)
- `friends` (Array of ObjectId, references User model)
- Virtuals:
  - `friendCount` (Number, retrieves the length of the user's friends array)

 ## Links: https://drive.google.com/file/d/1AeupqWRA9FhIbbyEvUrdD4iwBLdQxuHu/view?usp=drive_link

### Thought

- `thoughtText` (String, required, between 1 and 280 characters)
- `createdAt` (Date, default to current date, formatted using a getter)
- `username` (String, required)
- `reactions` (Array of reactionSchema)
- Virtuals:
  - `reactionCount` (Number, retrieves the length of the thought's reactions array)

### Reaction

- `reactionId` (ObjectId, default to a new ObjectId)
- `reactionBody` (String, required, maximum 280 characters)
- `username` (String, required)
- `createdAt` (Date, default to current date, formatted using a getter)

## License

This project is licensed under the MIT License.
