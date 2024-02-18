import express from 'express';
import path from 'path';
import apiRouter from './api.js';

const PORT = 4000;
const HOST_NAME = 'localhost';
const app = express();

// This logs to output every single HTTP request, useful for debugging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// This configures all routes that start /api to be handled by the API router
app.use('/api', apiRouter);
// This serves the client folder as a static website, useful for HTML, CSS and client-side
app.use(express.static('client', { fallthrough: true  })); //
// This is a catch-all route that sends a 404 error for any unknown paths
app.use((req, res) => {
    console.warn('404 path not found');
    res.status(404).sendFile(`${path.resolve()}/client/404.html`);
});
// This starts the server listening on the given port and hostname
app.listen(PORT, HOST_NAME, () => {
    console.log(`Server is running on http://${HOST_NAME}:${PORT}`);
});