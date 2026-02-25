# 09 - Authentication and JWT

Authentication answers: "Who are you?"

## Signup/Login Flow

1. User registers with email/password.
2. Password is hashed before storing.
3. User logs in.
4. Backend verifies password hash.
5. Backend creates JWT token.
6. Client sends token in `Authorization` header.

## Why Password Hashing Is Required

Never store plain passwords.
If DB leaks, plain passwords can be abused immediately.
Hashing converts password to irreversible form.
In this project, `bcrypt` is used.

## What Is JWT

JWT = JSON Web Token.
It is a signed token that proves identity.

Token usually contains:
- user id (`sub` or custom field)
- issued time
- expiry time

Why store only user id in token?
- smaller token
- less risk of data exposure
- fresh user details can be fetched from DB when needed

## Token Errors

- missing token -> `401 Unauthorized`
- invalid/expired token -> `401 Unauthorized`

## Authentication vs Authorization

- Authentication: who you are
- Authorization: what you are allowed to do
