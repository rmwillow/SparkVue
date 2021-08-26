# SparkVue

An API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This application uses Express, Node, MongoDB and Mongoose to allow users, thoughts, friend lists and thought reactions to be created, updated and deleted. 

## User Story
As a social media startup, I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data

## Walkthrough Video
https://drive.google.com/file/d/1kzhH45QgbuBWNgL6rpGHQ0hCZipLZJI2/view

## Models
- User
- Thought
- Reaction (used as a subdocument in Thought)

## Endpoints
**User**
- Get all users:        `GET /api/users`
- Create a user:        `POST /api/users`
- Get user by ID:       `GET /api/users/:id`
- Update a user:        `PUT /api/users/:id`
- Delete a user:        `DELETE /api/users/:id`
- Add a friend:         `PUT /api/users/:userId/friends/:friendId`
- Delete a friend:      `DELETE /api/users/:userId/friends/:friendId`

**Thought**
- Get all thoughts:     `GET /api/thoughts`
- Create a thought:     `POST /api/thoughts`
- Get thought by ID:    `GET /api/thoughts/:id`
- Update a thought:     `PUT /api/thoughts/:id`
- Delete a thought:     `DELETE /api/thoughts/:id`

**Reaction**
- Add a reaction:       `PUT /api/thoughts/:id/reactions`
- Delete a reaction:    `DELETE /api/thoughts/:id/reactions`


## Technologies 
* JavaScript
* Node.js
* MongoDB
* Mongoose
* Express.js

## Installation 
* Clone GitHub repository
* npm init
* Ensure that MongoDB and Express are installed on your computer. 
* Invoke application using npm start. 

## License
MIT license