const express = require('express');
const path = require('path');
const compression = require('compression'); // For GZIP compression
const helmet = require('helmet'); // For security best practices

const app = express();
const port = process.env.PORT || 3000;

// Enable GZIP compression
app.use(compression());

// Apply security best practices headers
app.use(helmet());

// Define the path to the frontend directory
const frontendPath = path.resolve(__dirname, 'frontend');

// Serve static files with cache control
app.use(express.static(frontendPath, {
    maxAge: '1d', // Cache static files for 1 day
    etag: false   // Optional: disable ETag if using maxAge
}));

// Route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server is running at http://localhost:${port}`);
});
