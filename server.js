const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Define the path to the frontend directory
const frontendPath = path.join("C:\\Users\\sambi\\OneDrive\\Desktop\\my project\\frontend");

// Serve static files from the frontend directory
app.use(express.static(frontendPath));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});