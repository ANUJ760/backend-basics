# Middleware Guide

Middleware runs between request arrival and controller execution.

Used here for:
- JWT verification (`authMiddleware`)
- centralized error handling

Auth middleware checks token presence, token validity, and attaches user identity to `req.user`.
