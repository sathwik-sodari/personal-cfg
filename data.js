import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Prachi',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            fulladdress:"a-2 , efewnf effr rfgerg rf erwee",
            city: 'Patiala',
            state: 'Punjab',
            gender: 'female',
            pincode: 400092,
            phoneNumber: '1234567890',
            hobbies: ['sing','dance'],
            careerPref: 'science',
            firstLang: 'english',
            secondLang: 'hindi',
            genderPref: 'female',
            isAdmin: true, 
        },
        {
            name: 'Rihana',
            email: 'user@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            fulladdress:"b-2 , efewnf effr rfgerg rf erwee",
            city: 'Patiala',
            state: 'Punjab',
            gender: 'female',
            pincode: 400092,
            phoneNumber: '1234567890',
            hobbies: ['sing','dance'],
            careerPref: 'science',
            firstLang: 'english',
            secondLang: 'hindi',
            genderPref: 'female',
            isAdmin: false,
        },
    ]
}

export default data;