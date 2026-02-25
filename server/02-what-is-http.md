# 02 - What Is HTTP?

HTTP = HyperText Transfer Protocol.
It is a communication protocol between client and server.

## Request and Response Cycle

1. Client sends HTTP request.
2. Server processes it.
3. Server sends HTTP response.

## HTTP Methods (Verbs)

- `GET`: read data
- `POST`: create data
- `PUT` or `PATCH`: update data
- `DELETE`: remove data

These map naturally to CRUD.

## Parts of a Request

- URL: where request is sent
- Method: action type (`GET`, `POST`...)
- Headers: metadata (token, content type)
- Body: actual data (often JSON)

## Parts of a Response

- Status code (example: `200`, `404`, `500`)
- Headers
- Body (usually JSON)

## Useful Status Codes

- `200 OK`: success
- `201 Created`: resource created
- `400 Bad Request`: client sent invalid data
- `401 Unauthorized`: token missing/invalid
- `403 Forbidden`: authenticated but not allowed
- `404 Not Found`: resource does not exist
- `500 Internal Server Error`: server failed

## Internal Behavior (Simplified)

HTTP is stateless: each request is independent. The server does not automatically remember previous requests unless we add sessions/tokens/database state.
