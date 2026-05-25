import express from 'express';
import cors from 'cors';
import contactsRouter from './routers/contacts.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';

const PORT = process.env.PORT || 3000;

export const setupServer = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use('/contacts', contactsRouter);

    app.use('*splat', notFoundHandler);
    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};