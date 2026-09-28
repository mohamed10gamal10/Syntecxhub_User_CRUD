# Syntecxhub - User CRUD API

Week 1 - Project 1 for Back-End Development.

## Requirements
- Node.js
- MongoDB
- Postman

## Features
- Create user
- Get all users
- Get user by ID
- Update user
- Delete user
- Required-field validation
- Email format validation
- Duplicate email protection
- Appropriate HTTP status codes
- Central error handling

## Setup

```bash
npm install
```

Copy `.env.example` to `.env` and update the MongoDB connection if needed.

Then run:

```bash
npm run dev
```

Server:
`http://localhost:3000`

## Endpoints

### Create
`POST /api/users`

```json
{
  "name": "Ahmed Ali",
  "email": "ahmed@example.com",
  "age": 22
}
```

### Get all
`GET /api/users`

### Get one
`GET /api/users/:id`

### Update
`PUT /api/users/:id`

```json
{
  "name": "Ahmed Mohamed",
  "email": "ahmed@example.com",
  "age": 23
}
```

### Delete
`DELETE /api/users/:id`

## Status Codes
- 201 Created
- 200 OK
- 400 Bad Request
- 404 Not Found
- 409 Conflict
- 500 Internal Server Error
