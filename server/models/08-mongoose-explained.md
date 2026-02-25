# 08 - Mongoose Explained

Mongoose is an ODM (Object Data Modeling) library for MongoDB + Node.js.

## What It Does

- defines schema rules
- creates models
- validates data
- provides methods like `find`, `create`, `findByIdAndUpdate`

## `mongoose.Schema`

A schema defines structure and constraints.

Example:

```js
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});
```

Meaning:
- `title` must be text and required
- `completed` is true/false, default false

## Data Types in This Project

- `String`: text
- `Boolean`: true/false
- `ObjectId`: MongoDB reference ID
- `Date`: timestamps

## Why Use Mongoose Instead of Raw MongoDB Driver (Beginner Context)

- cleaner syntax
- built-in validation
- schema-first teaching is easier
