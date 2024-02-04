import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    //extracts the username, email, password from the request body
     const { username, email, password } = req.body;

     if (!username || !email || !password || username === '' || email === '' || password === '') {
        return res.status(400).json({ message: 'All fileds are required'});
     }

const hashedPassword = bcryptjs.hashSync(password, 10);

    // creates a new instance of the user model
     const newUser = new User({ 
        username,
        email,
        password: hashedPassword,
     });

     try {
     // saves the user to the database
     await newUser.save();
     res.json('Signup successful');
     } catch (error) {
        res.status(500).json({ message: error.message});
     }

};