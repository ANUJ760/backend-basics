# Backend Course Todo: Beginner-Friendly Node.js + Express + MongoDB REST API Tutorial

This repository is a complete beginner course for backend development, taught through one practical project: a Todo App.
It is designed as a practical `backend tutorial for beginners` using `Node.js`, `Express.js`, `MongoDB`, `Mongoose`, `JWT authentication`, and `REST API CRUD`.

If you are new to programming or new to backend, this guide is written for you.

## What Is a Backend?

A backend is the part of an app that runs on a server and handles:
- data storage
- business logic
- security
- authentication

The frontend (React) shows buttons and screens.
The backend (Node.js + Express) decides what should happen when a user clicks those buttons.

Simple example:
1. You click "Add Todo" in the browser.
2. Frontend sends a request to backend.
3. Backend saves data in MongoDB.
4. Backend sends response back.
5. Frontend shows updated list.

## What You Will Learn in This Repository

By studying this project, you will understand:
- what client and server mean
- what HTTP requests/responses are
- what REST APIs are
- what CRUD operations are
- how MongoDB stores data
- how Mongoose schemas/models work
- what authentication and JWT are
- why we separate code into `routes`, `controllers`, `models`, and `middleware`
- why frontend should never connect directly to database

## Why This Todo App Backend Project Is Great for Learning

This todo app backend project is ideal for beginners because it is small but complete:
- it has clear CRUD operations
- it naturally demonstrates REST API design
- it teaches database modeling
- it teaches authentication
- it shows real frontend-backend communication

The app is simple enough that you can focus on architecture instead of business complexity.

## Data Flow in a REST API (How Request Travels)

`Browser -> Express Route -> Controller -> Model -> MongoDB -> Controller -> Response -> Browser`

What each step means:
1. `Browser` sends an HTTP request.
2. `Express Route` matches URL and method.
3. `Controller` runs business logic.
4. `Model` performs database query.
5. `MongoDB` stores/returns data.
6. `Controller` prepares JSON response.
7. `Browser` receives response and updates UI.

## Important Terms (Quick Glossary)

- `client`: app that sends request (browser/mobile app)
- `server`: app that receives request and returns response
- `API`: rules/endpoints used for communication
- `endpoint`: one specific API path + method (example: `POST /api/auth/login`)
- `request`: incoming data from client
- `response`: outgoing data from server
- `JSON`: text format for sending structured data
- `schema`: blueprint of document fields
- `middleware`: function that runs before controller
- `token`: proof of login sent in request headers
- `ObjectId`: MongoDB unique ID for documents

## Tech Stack for This Node.js Backend Project (What, Why, How)

### Backend Runtime: Node.js
- What: JavaScript runtime outside the browser.
- Why: you can use one language (JavaScript) in both frontend and backend.
- How in this project: runs the server process and executes Express code.

### Backend Framework: Express.js (Express.js Tutorial Concepts)
- What: minimal web framework for Node.js.
- Why: simple routing and middleware system, very beginner-friendly.
- How in this project: defines API endpoints like `POST /api/auth/login`.

### Database: MongoDB (MongoDB Tutorial Concepts)
- What: document database (stores JSON-like documents).
- Why: flexible schema and easy mapping with JavaScript objects.
- How in this project: stores users and todos in separate collections.

### ODM: Mongoose (Mongoose Tutorial Concepts)
- What: Object Data Modeling library for MongoDB.
- Why: schema rules, validation, cleaner queries, easier teaching.
- How in this project: defines `User` and `Todo` schemas/models in `server/models`.

### Authentication: JWT + bcryptjs (JWT Authentication Tutorial Concepts)
- What:
  JWT: signed token used for identity.
  bcryptjs: password hashing library.
- Why: never store plain passwords; token-based auth works well for APIs.
- How in this project:
  passwords are hashed before save, login returns a token, protected routes verify token.

### Frontend: React (Create React App)
- What: UI library based on reusable components.
- Why: component model is easy to reason about for beginner apps.
- How in this project: components render todos and call API functions from `client/src/api.js`.

### API Style: REST over HTTP + JSON (REST API Tutorial + CRUD API Example)
- What: standard request/response style for web APIs.
- Why: predictable endpoints and clear CRUD mapping.
- How in this project: auth and todo endpoints return JSON with status codes.

## Project Structure

```text
Todo/
├── README.md
├── server/
│   ├── server.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   └── routes/
└── client/
    └── src/
        └── components/
```

## Mental Model (How To Think About This App)

Use this model while reading code:

1. UI intention: \"What is user trying to do?\" (example: create todo)
2. API contract: \"Which endpoint handles this action?\"
3. Controller rule: \"What validations and checks run?\"
4. Data operation: \"What query runs in MongoDB?\"
5. Response meaning: \"Which status code and JSON should come back?\"
6. UI update: \"How does frontend state change after response?\"

If you get stuck, trace one request end-to-end:
`button click -> api.js -> route -> controller -> model -> DB -> response -> React state`.

## Why and How (Core Design Decisions)

### Why split `routes`, `controllers`, `models`, `middleware`?
- Why: separation of concerns. Each folder has one job.
- How it helps: easier debugging, easier testing, cleaner scaling.

### Why frontend and backend are separate?
- Why: backend keeps secrets secure and controls business logic.
- How: frontend sends HTTP requests only; backend is the only layer talking to MongoDB.

### Why hash passwords?
- Why: if database leaks, plain passwords would be immediately exposed.
- How: bcrypt converts password into irreversible hash + salt.

### Why store only user id in JWT?
- Why: smaller token, less sensitive data exposure.
- How: backend uses id from token to fetch latest user data when needed.

### Why environment variables?
- Why: credentials and secrets should not be hardcoded in source files.
- How: values are loaded via `process.env` from `.env`.

### Why CORS?
- Why: browser blocks cross-origin requests by default.
- How: backend enables CORS so `localhost:3000` can call `localhost:5000`.

## Prerequisites

Install these first:
- Node.js LTS: https://nodejs.org/
- MongoDB Community Server: https://www.mongodb.com/try/download/community
- Optional API client: Postman https://www.postman.com/

## Setup Instructions (Step by Step)

### 1. Backend Setup

```bash
cd server
npm install
```

Create/update `server/.env` with:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todo_course
JWT_SECRET=your_long_random_secret
```

Start backend:

```bash
npm run dev
```

Expected: backend runs on `http://localhost:5000`.

### 2. Frontend Setup

Open second terminal:

```bash
cd client
npm install
npm start
```

Expected: frontend opens on `http://localhost:3000`.

## Pro Tips (Beginner to Strong Beginner)

1. Read one endpoint completely before moving to next.
2. Use Postman to test APIs before debugging React UI.
3. Trust status codes first, then inspect response body.
4. Log `req.body`, `req.params`, and `req.user` while learning.
5. Break things intentionally (bad token, wrong id) to understand error paths.
6. Keep commit messages specific: `add auth middleware` is better than `update`.
7. Never commit `.env` or real secrets.
8. When confused, ask: \"Is this a routing issue, logic issue, or DB issue?\"

## Common Beginner Debug Strategy

1. Check server is running and MongoDB is connected.
2. Check endpoint URL and HTTP method.
3. Check request body and headers (`Authorization: Bearer <token>`).
4. Check backend logs and response status code.
5. Check frontend state update after response.
6. Re-test same request in Postman to isolate frontend vs backend issue.

## About Create React App

Create React App (CRA) is deprecated for modern production projects.
It is used here only because setup is beginner-friendly and keeps focus on backend learning.

Later you can migrate to Vite or Next.js.

## API Overview (Beginner REST API Map)

Auth routes:
- `POST /api/auth/register`
- `POST /api/auth/login`

Todo routes (protected, token required):
- `GET /api/todos`
- `POST /api/todos`
- `PUT /api/todos/:id`
- `DELETE /api/todos/:id`

This endpoint structure is a standard CRUD API example and matches common Express.js tutorial patterns.

## Common Edge Cases and Expected Backend Response

- Register with existing email -> `409 Conflict`
- Login with wrong password -> `401 Unauthorized`
- Missing token -> `401 Unauthorized`
- Invalid/expired token -> `401 Unauthorized`
- Todo ID does not exist -> `404 Not Found`
- User tries to edit another user's todo -> blocked (`404` in this project)
- MongoDB not connected -> server startup fails safely

## Why Frontend and Backend Are Separate

- backend can protect secrets
- frontend can evolve independently
- deployment is cleaner
- responsibilities are clearer

If frontend had direct MongoDB access, database credentials would be exposed.
That is a major security risk.

## Chapter Links (Placed in Relevant Folders)

- [01 - What Is Backend](./server/01-what-is-backend.md)
- [02 - What Is HTTP](./server/02-what-is-http.md)
- [03 - What Is REST](./server/routes/03-what-is-rest.md)
- [04 - What Is CRUD](./server/routes/04-what-is-crud.md)
- [05 - Project Architecture](./server/05-project-architecture.md)
- [06 - Folder Structure Explained](./server/06-folder-structure-explained.md)
- [07 - MongoDB Explained](./server/models/07-mongodb-explained.md)
- [08 - Mongoose Explained](./server/models/08-mongoose-explained.md)
- [09 - Authentication and JWT](./server/middleware/09-authentication-and-jwt.md)
- [10 - Common Mistakes](./server/10-common-mistakes.md)
- [11 - FAQ and Doubts](./client/11-faq-and-doubts.md)

## Learning Roadmap for Backend Beginners

1. Read all chapter files in order.
2. Run backend and frontend.
3. Register a user and login.
4. Test all todo endpoints in Postman.
5. Read comments in server code line by line.
6. Add one feature yourself (example: due date or priority).
7. Build a second mini API from scratch without copying.

After this, you should be able to build a small Node.js + Express + MongoDB backend independently.
