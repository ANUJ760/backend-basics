# 10 - Common Mistakes

## 1. Exposing Secrets

Mistake: committing `.env` file.
Fix: commit only `.env.example`; keep real secrets local.

## 2. No Input Validation

Mistake: accepting empty title or malformed email.
Fix: validate request body before database write.

## 3. Returning Raw Errors

Mistake: sending full stack traces to client.
Fix: send safe messages; log detailed errors server-side.

## 4. Not Checking Ownership

Mistake: allowing user A to edit user B todo by ID.
Fix: query using both `_id` and `user`.

## 5. Not Handling Mongo Connection Failure

Mistake: assuming DB always available.
Fix: stop startup or return `500` safely.

## 6. Wrong Status Codes

Mistake: sending `200` for every outcome.
Fix: use meaningful codes (`400`, `401`, `404`, `409`, `500`).

## 7. Inconsistent Naming

Mistake: mixing naming styles randomly (`addtodo`, `Add_todo`, `todoListData` in unrelated patterns).
Fix: follow one naming convention consistently:
- components/models: `PascalCase`
- variables/functions: `camelCase`
- env constants: `UPPER_SNAKE_CASE`
- docs files: `kebab-case`

This reduces mental load and import mistakes.

## 8. Large Controller Functions

Mistake: one controller doing validation, DB queries, formatting, and unrelated logic in one long block.
Fix: split into small helper functions and keep each controller focused on one use case.

## Required Edge Cases and Expected Responses

- Register with existing email -> `409 Conflict` with message like "Email already registered".
- Login with wrong password -> `401 Unauthorized` with generic message.
- Token missing -> `401 Unauthorized`.
- Token invalid/expired -> `401 Unauthorized`.
- Todo ID does not exist -> `404 Not Found`.
- User tries to access another user's todo -> usually `404 Not Found` or `403 Forbidden`.
  This course uses `404` to avoid revealing whether another user's todo exists.
- MongoDB connection fails at startup -> log error and stop server (`process.exit(1)`).

Using these responses gives predictable API behavior for frontend developers.
