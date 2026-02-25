# 07 - MongoDB Explained

MongoDB is a NoSQL document database.

## Basic Terms

- `database`: container for collections
- `collection`: group of documents (similar to table)
- `document`: one record in JSON-like BSON format

Example todo document:

```json
{
  "_id": "65f0f3f2a22...",
  "title": "Study HTTP",
  "completed": false,
  "user": "65f0e2ba91..."
}
```

## Where `_id` Comes From

MongoDB automatically creates `_id` for each new document.
It is unique. By default it is an `ObjectId`.

## What Is ObjectId

`ObjectId` is a special MongoDB identifier type (12-byte value, often shown as 24 hex characters).
It helps uniquely identify each document.

## Why MongoDB for Beginners

- schema flexibility
- JSON-like data maps well to JavaScript
- fast setup with Mongoose
