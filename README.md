# Express.js JSON Body Parsing Issue
This repository demonstrates a common issue encountered when using Express.js to parse JSON request bodies: failure to handle empty or invalid JSON data.  The bug.js file shows the flawed implementation, while bugSolution.js provides a corrected version.

## Bug Description
The original code attempts to parse the request body using `express.json()`. However, it doesn't handle scenarios where the request body is empty or contains malformed JSON. This leads to unexpected behavior or errors.

## Solution
The bugSolution.js file addresses the issue by adding error handling using try-catch blocks and checking the existence of `req.body`. This ensures that the application gracefully handles both empty and invalid JSON bodies without crashing.