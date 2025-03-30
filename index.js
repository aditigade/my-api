require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON
app.use(express.json());

// API Key Middleware for authentication
app.use((req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ error: 'Invalid API Key' });
    }
    next();
});

// Sample Route
app.get('/', (req, res) => {
    res.json({ message: 'API is live!', status: 'success' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
