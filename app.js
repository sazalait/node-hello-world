'use strict';

const express = require('express')
const app = express();

const port = 8080;
const host = '0.0.0.0';

app.get('/', (req, res) => {
  res.send(`
<html>
  <head>
    <style>
      body {
        background-color: #0c4773; /* Softer background color */
        font-family: Arial, sans-serif; /* Clean font for the entire page */
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }

      .container {
        text-align: center;
        background-color: #fff; /* White background for the text container */
        padding: 30px;
        border-radius: 10px; /* Rounded corners */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
      }

      .centered-text {
        color: #333; /* Darker text color for better contrast */
        font-size: 24px;
        margin: 10px 0;
      }

      .centered-text:first-child {
        font-weight: bold; /* Bold for the first line */
      }

      .centered-image {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 20px; /* Space between the image and text */
      }
    </style>
  </head>
  <body>
    <div class="container">
      <p class="centered-text">Gitlab Test CI/CD Configuration</p>
      <p class="centered-text">This is Test for changes.</p>
    </div>
  </body>
</html>
`);
});


if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Running on http://${host}:${port}`);
  });
}

module.exports = app; // Export the app for testing

