# 11 - FAQ and Doubts

## Why are frontend and backend separate projects?

They solve different problems. Frontend manages UI. Backend manages logic/security/data. Separation improves clarity and deployment flexibility.

## Why create `components/` folder manually in React?

React gives core tools but not strict folder design. We create `components/` manually for organization and reuse.

## What are React components?

Components are reusable UI building blocks. Example: `TodoItem` renders one todo row.

## Where does `req` and `res` come from?

Express provides them for each HTTP request.
- `req`: incoming request data
- `res`: object used to send response

## What is `async` and `await`?

- `async` marks a function that returns a Promise.
- `await` pauses inside async function until Promise resolves/rejects.

Simple analogy: Promise is a "delivery ticket" for future result.

## Why React cannot connect directly to MongoDB?

Direct DB access from browser exposes credentials and allows malicious access. Backend must be the only layer talking to DB.

## What if DB credentials are exposed?

Attackers can read, modify, or delete data. Always use environment variables, restricted DB users, and IP/network restrictions.

## What are environment variables?

Key-value settings stored outside code (`process.env`). Used for secrets and environment-specific values.

## Why `const` or `let`?

- `const`: variable reference should not be reassigned
- `let`: variable can be reassigned

Avoid `var` in modern code because of confusing scope behavior.

## What is `module.exports` and `require`?

CommonJS module system in Node.js:
- `module.exports` shares functions/objects from file
- `require("./path")` imports them
