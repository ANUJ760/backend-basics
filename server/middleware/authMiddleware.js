const jwt = require("jsonwebtoken") // Import the jsonwebtoken library to handle JWT operations.

module.exports = (req, res, next) => {
    const token = req.header("Authorization") // Get the token from the Authorization header of the incoming request.
    if (!token) return res.status(401).json({msg: "No token"}) // If no token is provided, return a 401 Unauthorized response with a message.

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // Verify the token using the secret key from environment variables. If the token is valid, it will return the decoded payload.
        req.user = decoded.id // Attach the user ID from the decoded token to the request object for use in subsequent middleware or route handlers.
        next() // Call the next middleware function in the stack.
    } catch (err) {
        res.status(401).json({message: "Invalid token"})
    }
}