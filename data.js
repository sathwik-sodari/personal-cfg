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
            // mentor:'' 
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
            // mentor:'' 
        },
    ],
    mentors:[
        {
            name: 'Prachimentor',
            email: 'mentor1@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            fulladdress:"a-2 , efewnf effr rfgerg rf erwee",
            city: 'Patiala',
            state: 'Punjab',
            gender: 'female',
            pincode: 400092,
            phoneNumber: '1234567890',
            hobbies: ['sing','dance'],
            career: 'science',
            firstLang: 'english',
            secondLang: 'french',
            qualification:'+1',
            isAdmin: false,
            // mentee:''
        },
        {
            name: 'rachimentor',
            email: 'mentor2@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            fulladdress:"a-2 , efewnf effr rfgerg rf erwee",
            city: 'Patiala',
            state: 'Punjab',
            gender: 'female',
            pincode: 400092,
            phoneNumber: '1234567890',
            hobbies: ['sing','dance'],
            career: 'medical',
            firstLang: 'hindi',
            secondLang: 'french',
            qualification:'+1',
            isAdmin: false,
            // mentee:''
        }

    ],
    applicants:[
        {
            name: 'achimentor',
            email: 'applicant1@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            fulladdress:"a-2 , efewnf effr rfgerg rf erwee",
            city: 'Patiala',
            state: 'Punjab',
            gender: 'female',
            pincode: 400092,
            phoneNumber: '1234567890',
            hobbies: ['sing','dance'],
            career: 'medical',
            firstLang: 'tamil',
            secondLang: 'french',
            qualification:'+1',
            isAdmin: false,
            // mentee:''
        },
        {
            name: 'himentor',
            email: 'applicant2@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            fulladdress:"a-2 , efewnf effr rfgerg rf erwee",
            city: 'Patiala',
            state: 'Punjab',
            gender: 'female',
            pincode: 400092,
            phoneNumber: '1234567890',
            hobbies: ['sing','dance'],
            career: 'commerce',
            firstLang: 'hindi',
            secondLang: 'english',
            qualification:'+1',
            isAdmin: false,
            // mentee:''
        }

    ]
}


    


export default data;
