import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import { registerValidation } from './validations/auth.js';

mongoose
    .connect('mongodb+srv://admin:wwwwww@cluster0.deu0b.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch(() => console.log('DB error', err));

const app = express();

app.use(express.json()); 

app.post('/auth/register', registerValidation, (req, res) => {

});

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
}); 