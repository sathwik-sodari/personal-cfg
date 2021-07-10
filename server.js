import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routers/userRouter.js';
import dotenv from 'dotenv';
import applicantRouter from './Routers/applicantRouter.js';
import mentorRouter from './Routers/mentorRouter.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.use('/api/users', userRouter);
app.use('/api/mentors', mentorRouter);
app.use('/api/applicants', applicantRouter);

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serving at port ${port}`);
});