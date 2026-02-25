# 01 - What Is Backend?

## Simple Definition

Backend is the part of a software system that works behind the scenes. Users usually do not see it directly.

Frontend = what user sees.
Backend = logic + data + security.

## Real-World Analogy

Think of a restaurant:
- Customer area = frontend
- Kitchen = backend

Customers place orders (requests). Kitchen prepares food (processing). Waiter brings food back (response).

## Important Terms

- `server`: a computer/program that receives requests and sends responses.
- `client`: software that asks for service (browser, mobile app).
- `browser`: Chrome/Firefox/etc, a common client.
- `request`: message from client asking backend for something.
- `response`: backend answer to client.
- `API`: rules/endpoints to communicate between client and backend.
- `JSON`: text format used to send structured data.

Example JSON:

```json
{
  "title": "Learn backend",
  "completed": false
}
```

## Why Backend Exists

Backend is needed for:
- storing data permanently (database)
- applying rules (example: only owner can edit todo)
- authentication and authorization
- keeping secrets safe (DB credentials, private keys)

## Common Misconception

"Can frontend do everything?"

No. Frontend runs on user device. Anything secret in frontend can be viewed by user. Backend is required for trusted logic and secure data access.
