# 05 - Project Architecture

## Client-Server Architecture

This project uses two separate applications:
- Frontend client (React)
- Backend server (Node.js + Express)

Why separate?
- clear responsibilities
- easier scaling
- safer secret handling
- independent deployment

## High-Level Flow

1. User types todo in browser.
2. React sends HTTP request.
3. Express route receives request.
4. Controller validates and applies logic.
5. Model talks to MongoDB.
6. Response sent back as JSON.
7. React updates UI.

## Why Frontend Cannot Connect Directly to MongoDB

- MongoDB needs credentials.
- If frontend connects directly, credentials are exposed.
- Any user could inspect code/network and steal credentials.
- Backend acts as security gate.

## CORS in This Architecture

Frontend (`localhost:3000`) and backend (`localhost:5000`) are different origins.
Browser blocks cross-origin requests by default.
`cors` middleware allows trusted cross-origin communication.
