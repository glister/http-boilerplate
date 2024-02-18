import express from 'express';
import multer from 'multer';

// Multer is an open source library which helps decode HTTP requests from the client that includes files
const uploadStorage = multer({ storage: multer.memoryStorage() });

const apiRouter = express.Router();
apiRouter.use(express.json({ limit: '10mb' })); // only allow photos up to 10mb in size

// This is an example of a simple API route that responds to a GET request
apiRouter.get('/hello', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

// This is an example of a simple API route that responds to a POST request that includes a photo file in the request body
apiRouter.post('/classify', uploadStorage.single('photo'), (req, res) => {
    // perform image classification and respond with the result
    // req.file is the photo file
    // req.body contains any other form fields
});

export default apiRouter;