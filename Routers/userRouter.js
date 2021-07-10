import express from 'express';
import bcrypt from 'bcryptjs';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import { generateToken, isAdmin, isAuth } from '../utils.js';
import User from '../models/menteeModel.js'
import { generateToken, isAdmin, isAuth } from '../utils.js';
import Mentor from '../models/mentorModel.js'

const userRouter = express.Router();

userRouter.get('/seed',  expressAsyncHandler (async(req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}));

userRouter.post('/signin', expressAsyncHandler (async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if(user){
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                fulladdress: user.fulladdress,
                city: user.city,
                state: user.state,
                gender: user.gender,
                pincode: user.pincode,
                phoneNumber: user.phoneNumber,
                hobbies: user.hobbies,
                careerPref: user.careerPref,
                firstLang: user.firstLang,
                secondLang: user.secondLang,
                genderPref: user.genderPref,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password' });
}));

userRouter.post('/register', expressAsyncHandler (async(req, res) => {
    const user = new User ({
        name: req.body.name,
        email: req.body.email,
        fulladdress: req.body.fulladdress,
        city: req.body.city,
        state: req.body.state,
        gender: req.body.gender,
        pincode: req.body.pincode,
        phoneNumber: req.body.phoneNumber,
        hobbies: req.body.hobbies,
        careerPref: req.body.careerPref,
        firstLang:req.body.firstLang,
        secondLang: req.body.secondLang,
        genderPref: req.body.genderPref,
        isAdmin: req.body.isAdmin,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        fulladdress: createdUser.fulladdress,
        city: createdUser.city,
        state: createdUser.state,
        gender: createdUser.gender,
        pincode: createdUser.pincode,
        phoneNumber: createdUser.phoneNumber,
        hobbies: createdUser.hobbies,
        careerPref: createdUser.careerPref,
        firstLang:createdUser.firstLang,
        secondLang: createdUser.secondLang,
        genderPref: createdUser.genderPref,
        isAdmin: createdUser.isAdmin,
        token: generateToken(createdUser),
    });
}));

userRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if(user){
        res.send(user);
    } else{
        res.status(404).send({ message: 'User Not Found' });
    }
}));

userRouter.put(
    '/profile',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.user._id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.fulladdress = req.body.fulladdress || user;
        user.city = req.body.city || user.city;
        user.state = req.body.state || user.state;
        user.gender = req.body.gender || user.gender;
        user.pincode = req.body.pincode || user.pincode;
        user.phoneNumber = req.body.phoneNumber || user.phonenumber;
        user.hobbies = req.body.hobbies || user.hobbies;
        user.careerPref = req.body.careerPref || user.careerPref;
        user.firstLang =req.body.firstLang || user.firstLang;
        user.secondLang = req.body.secondLang || user.secondLang;
        user.genderPref = req.body.genderPref || user.genderPref;
        if (req.body.password) {
          user.password = bcrypt.hashSync(req.body.password, 8);
        }
        const updatedUser = await user.save();
        res.send({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          fulladdress: updatedUser.fulladdress,
          city: updatedUser.city,
          state: updatedUser.state,
          gender: updatedUser.gender,
          pincode: updatedUser.pincode,
          phoneNumber: updatedUser.phoneNumber,
          hobbies: updatedUser.hobbies,
          careerPref: updatedUser.careerPref,
          firstLang:updatedUser.firstLang,
          secondLang: updatedUser.secondLang,
          genderPref: updatedUser.genderPref,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),
        });
      }
    })
  );

  userRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  );

  userRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        if (user.email === 'admin@example.com') {
          res.status(400).send({ message: 'Can Not Delete Admin User' });
          return;
        }
        const deleteUser = await user.remove();
        res.send({ message: 'User Deleted', user: deleteUser });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );

  userRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const user = await User.findById(req.params.id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.fulladdress = req.body.fulladdress || user;
        user.city = req.body.city || user.city;
        user.state = req.body.state || user.state;
        user.gender = req.body.gender || user.gender;
        user.pincode = req.body.pincode || user.pincode;
        user.phoneNumber = req.body.phoneNumber || user.phonenumber;
        user.hobbies = req.body.hobbies || user.hobbies;
        user.careerPref = req.body.careerPref || user.careerPref;
        user.firstLang =req.body.firstLang || user.firstLang;
        user.secondLang = req.body.secondLang || user.secondLang;
        user.genderPref = req.body.genderPref || user.genderPref;
        user.isAdmin = Boolean(req.body.isAdmin);
        const updatedUser = await user.save();
        res.send({ message: 'User Updated', user: updatedUser });
      } else {
        res.status(404).send({ message: 'User Not Found' });
      }
    })
  );


  userRouter.get('/cancel/:id',isAuth,expressAsyncHandler(async (req, res) =>{
    const user=await User.findById(req.params.id)
    const mentorId=user.mentor
    const mentor=await Mentor.findById(mentorId)
    if(mentor.mentee!=null){
      mentor.mentee=null
      const updatedMentor=await mentor.save()
    }
    if(user.mentor!=null){
      user.mentor=null
      const updatedUser=await user.save()
    }
    res.send({message:"updated successully"})

  }))

  userRouter.get('/find/:id',isAuth,expressAsyncHandler(async (req, res) =>{
    const user = await User.findById(req.params.id);
    const mentors=await Mentor.find({})
    const totalMentors=mentors.length
    const score=new Array(totalMentors).fill(0)
    var dupMentors=[]
    mentors.forEach((mentor,index)=>{
      mentor.score=0
      if(mentor.mentee===null){
        if(user.genderPref==='does not matter'){
          mentor.score+=10
        }
        else if(user.genderPref===mentor.gender){
          mentor.score+=10
        }
        if(user.careerPref===mentor.career){
          mentor.score+=8
        }
        if(user.firstLang===mentor.firstLang || user.firstLang===mentor.secondLang || user.secondLang===mentor.firstLang || user.secondLang===mentor.secondLang){
          mentor.score+=6
        }
        
        if(user.city===mentor.city){
          mentor.score+=4
        }
        else if(user.state===mentor.state){
          mentor.score+=3
        }
      } 
      dupMentors.push(mentor)
      console.log(mentor.score)
    })

    dupMentors.sort((a,b)=>{
      return b.score-a.score
    })
    // console.log(dupMentors)
    res.send({mentors:dupMentors})

  }));

  userRouter.post('/choose/:id',expressAsyncHandler(async (req, res) =>{
    const userId = req.params.id;
    const user = await User.findById(req.params.id);
    console.log(user)
    const mentorId = req.body._id;
    console.log(mentorId)
    console.log(userId)
    const mentor = await Mentor.findById(req.body._id);
    console.log(mentor)
    user.mentor = mentorId;
    mentor.mentee = userId;
    const newMentor=await mentor.save()
    const newUser=await user.save()
    res.send(user);
  }));

export default userRouter;