import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    //extracts the username, email, password from the request body
     const { username, email, password } = req.body;

     if (!username || !email || !password || username === '' || email === '' || password === '') 
     {
      next(errorHandler(400, 'All fields are required '));
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
        next(error);
     }
    
};