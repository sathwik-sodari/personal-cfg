import mongoose from 'mongoose';

const userSchema  = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        fulladdress: { type: String, required: true},
        city: { type: String, required: true },
        state: { type: String, required: true},
        gender: { type: String, required: true},
        pincode: {type: Number, required: true},
        phoneNumber: {type: String, required: true},
        hobbies: {type: Array, required: true},
        careerPref: {type: String, required: true},
        firstLang: {type:String, required: true},
        secondLang: {type:String, required: true},
        genderPref: {type:String, required: true},
        isAdmin: { type: Boolean, default: false, required: true},
        mentor: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor', required: true },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
export default User;