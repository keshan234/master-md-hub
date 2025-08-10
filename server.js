const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// File upload config
const upload = multer({ dest: 'uploads/' });

// Routes
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Master MD Hub backend!' });
});

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ message: 'File uploaded successfully!', file: req.file });
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
