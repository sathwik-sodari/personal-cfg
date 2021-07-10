import express from 'express';
// import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Mentor from '../models/mentorModel.js';
import { generateToken, isAuth, isAdmin } from '../utils.js';
import data from '../data.js';

const mentorRouter = express.Router();

mentorRouter.get('/seed',  expressAsyncHandler (async(req, res) => {
  // await User.remove({});
  const createdMentors = await Mentor.insertMany(data.mentors);
  res.send({ createdMentors });
}));

mentorRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const mentors = await Mentor.find({});
    res.send(mentors);
  })
);

mentorRouter.post('/signin', expressAsyncHandler (async(req, res) => {
  const mentor = await Mentor.findOne({ email: req.body.email });

  if(mentor){
      if(bcrypt.compareSync(req.body.password, mentor.password)){
          res.send({
              _id: mentor._id,
              name: mentor.name,
              email: mentor.email,
              fulladdress: mentor.fulladdress,
              city: mentor.city,
              state: mentor.state,
              gender: mentor.gender,
              pincode: mentor.pincode,
              phoneNumber: mentor.phoneNumber,
              hobbies: mentor.hobbies,
              careerPref: mentor.careerPref,
              firstLang: mentor.firstLang,
              secondLang: mentor.secondLang,
              genderPref: mentor.genderPref,
              isAdmin: mentor.isAdmin,
              token: generateToken(mentor),
          });
          return;
      }
  }
  res.status(401).send({ message: 'Invalid email or password' });
}));



mentorRouter.get('/cancel/:id',isAuth,expressAsyncHandler(async (req, res) =>{
  const mentor=await Mentor.findById(req.params.id)
  const menteeId=mentor.mentee
  const mentee=await User.findById(menteeId)
  if(mentor.mentee!=null){
    mentor.mentee=null
    const updatedMentor=await mentor.save()
  }
  if(mentee.mentor!=null){
    user.mentor=null
    const updatedUser=await mentee.save()
  }
  res.send({message:"updated successully"})

}))


export default mentorRouter;