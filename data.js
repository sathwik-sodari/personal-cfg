import bcrypt from 'bcryptjs';

const data = {

    users: [
        {
            name: 'Prachi',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'Rihana',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ]
}

export default data;