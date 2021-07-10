import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Mentor from '../models/mentorModel.js';
import { generateToken } from '../utils.js';
import data from '../data.js';

const mentorRouter = express.Router();

mentorRouter.get('/seed',  expressAsyncHandler (async(req, res) => {
  // await User.remove({});
  const createdMentors = await Mentor.insertMany(data.mentors);
  res.send({ createdMentors });
}));


export default mentorRouter;