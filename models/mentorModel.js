import mongoose from 'mongoose';

const mentorSchema  = new mongoose.Schema(
    {
        name: { type: String, required: true},
        email: { type: String, required: true, unique: true},
        password: { type: String, required: true},
        fulladdress: { type: String, required: true},
        city: { type: String, required: true },
        state: { type: String, required: true},
        gender: { type: String, required: true},
        pincode: {type: Number, required: true},
        hobbies: {type: Array, required: true},
        phoneNumber: {type: String, required: true},
        career: {type: String, required: true},
        firstLang: {type:String, required: true},
        secondLang: {type:String, required: true},
        qualification: {type: String, required: true},
        isAdmin: { type: Boolean, default: false, required: true},
        mentee: { type: mongoose.Schema.Types.ObjectId, ref: 'User',default:null },
    },
    {
        timestamps: true,
    }
);

const Mentor = mongoose.model('Mentor', mentorSchema);
export default Mentor;