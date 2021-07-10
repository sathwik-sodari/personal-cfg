import express from 'express';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import Applicant from '../models/applicationModel.js';
import { generateToken , isAdmin , isAuth } from '../utils.js';
import data from '../data.js';
import Mentor from '../models/mentorModel.js'

const applicantRouter = express.Router();

applicantRouter.get('/seed',  expressAsyncHandler (async(req, res) => {
  // await User.remove({});
  const createdApplicants = await Applicant.insertMany(data.applicants);
  res.send({ createdApplicants });
}));

applicantRouter.get('/accept/:id',expressAsyncHandler (async(req, res) =>{
  const id=req.params.id
  const applicant=await Applicant.findByIdAndDelete(id)
  const mentor=new Mentor({
    name: applicant.name,
    email: applicant.email,
    fulladdress: applicant.fulladdress,
    city: applicant.city,
    state: applicant.state,
    gender: applicant.gender,
    pincode: applicant.pincode,
    phoneNumber: applicant.phoneNumber,
    hobbies: applicant.hobbies,
    career: applicant.career,
    firstLang:applicant.firstLang,
    secondLang: applicant.secondLang,
    qualification: applicant.qualification,
    isAdmin: applicant.isAdmin,
    password: applicant.password,
  })
  const newMentor=await mentor.save()
  res.send({mentor:newMentor})
  
}))

applicantRouter.post('/register', expressAsyncHandler (async(req, res) => {
    const applicant = new Applicant ({
        name: req.body.name,
        email: req.body.email,
        fulladdress: req.body.fulladdress,
        city: req.body.city,
        state: req.body.state,
        gender: req.body.gender,
        pincode: req.body.pincode,
        phoneNumber: req.body.phoneNumber,
        hobbies: req.body.hobbies,
        career: req.body.career,
        firstLang:req.body.firstLang,
        secondLang: req.body.secondLang,
        qualification: req.body.qualification,
        isAdmin: req.body.isAdmin,
        password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdApplicant = await applicant.save();
    res.send({
        _id: createdApplicant._id,
        name: createdApplicant.name,
        email: createdApplicant.email,
        fulladdress: createdApplicant.fulladdress,
        city: createdApplicant.city,
        state: createdApplicant.state,
        gender: createdApplicant.gender,
        pincode: createdApplicant.pincode,
        phoneNumber: createdApplicant.phoneNumber,
        hobbies: createdApplicant.hobbies,
        career: createdApplicant.career,
        firstLang:createdApplicant.firstLang,
        secondLang: createdApplicant.secondLang,
        qualification: createdApplicant.qualification,
        isAdmin: createdApplicant.isAdmin,
        token: generateToken(createdUser),
    });
}));

applicantRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const applicant = await Applicant.findById(req.params.id);
    if(applicant){
        res.send(applicant);
    } else{
        res.status(404).send({ message: 'Applicant Not Found' });
    }
}));

applicantRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const applicants = await Applicant.find({});
      res.send(applicants);
    })
  );

  applicantRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const applicant = await Applicant.findById(req.params.id);
      if (applicant) {
        if (applicant.email === 'admin@example.com') {
          res.status(400).send({ message: 'Can Not Delete Admin' });
          return;
        }
        const deleteApplicant = await applicant.remove();
        res.send({ message: 'Applicant Deleted', user: deleteApplicant });
      } else {
        res.status(404).send({ message: 'Applicant Not Found' });
      }
    })
  );


  export default applicantRouter;