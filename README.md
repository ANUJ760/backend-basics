# Backend Course Todo (Beginner Handbook)

This repository teaches backend development from beginner level using a Todo App.

## What This Project Teaches

- what backend is
- what HTTP is
- what REST APIs are
- what CRUD is
- what MongoDB and Mongoose are
- how frontend and backend communicate
- how JWT authentication works
- why folder separation exists (`models`, `routes`, `controllers`, `middleware`)

## Why Todo App

Todo apps are ideal for learning backend because they clearly demonstrate CRUD and REST API design while staying simple.

## Data Flow

`Browser -> Express -> Controller -> Model -> MongoDB -> Controller -> Browser`

## Setup

### Backend

```bash
cd server
npm install
# create/update .env with PORT, MONGO_URI, JWT_SECRET
npm run dev
```

### Frontend

```bash
cd client
npm install
npm start
```

## Important Note

Create React App is deprecated for modern production apps. It is used here only for beginner teaching simplicity.

## Course Chapters (Placed In Relevant Folders)

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

## Learning Roadmap

1. Read all chapters in order.
2. Run backend and frontend.
3. Test auth + todo APIs in Postman.
4. Read comments in server files line by line.
5. Add one feature (example: due date).
