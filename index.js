// Import the Express library to create a web server
var express = require('express');

// Create an Express application
var app = express();

// Define a route for GET requests to the root URL ("/")
app.get('/', function (req, res) {
    // Send an HTML response with basic styling and a container for the text
    res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <!-- Meta tags and title for the HTML document -->
            <meta charset="UTF-8">
            <title>SIT323 Task 5.2D Microservice</title>
            <!-- Internal CSS for basic styling -->
            <style>
              /* Style for the entire page */
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              /* Centered container with a white background, rounded corners, and shadow */
              .container {
                max-width: 800px;
                margin: 100px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                text-align: center;
              }
              /* Style for the heading */
              h1 {
                color: #333;
              }
              /* Style for the paragraph text */
              p {
                color: #666;
                font-size: 18px;
              }
            </style>
          </head>
          <body>
            <!-- Main container for the content -->
            <div class="container">
              <!-- Heading -->
              <h1>Hello, welcome to SIT323</h1>
              <!-- Description paragraph -->
              <p>This is task 5.2D, demonstrating deploying the microservice to the cloud.</p>
            </div>
          </body>
        </html>
    `);
});

// Start the server and have it listen on port 3000
var server = app.listen(3000, function () {
    // Log a message to the console indicating the server is running
    console.log("Express App running at http://127.0.0.1:3000/");
});
