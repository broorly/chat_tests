const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Serve frontend files based on the request path
    let filePath = req.url === '/' ? '/yo.html' : req.url;
    filePath = path.join(__dirname, 'front', filePath);

    // Check if the file exists
    fs.access(filePath, fs.constants.R_OK, (err) => {
        if (!err) {
            // Read and serve the file
            fs.createReadStream(filePath).pipe(res);
        } else {
            // File not found, return a 404 response
            res.statusCode = 404;
            res.end('File not found');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
