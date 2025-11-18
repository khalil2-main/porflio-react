import mongoose from "mongoose";
import {isEmail} from 'validator';

const userSchema = new mongoose.Schema({
  firstname: { 
    type: String, 
    required: [true, "First name is required"],
    match: [/^[A-Za-z]+$/, "First name must contain letters only"]
  },

  lastname: { 
    type: String, 
    required: [true, "Last name is required"],
    match: [/^[A-Za-z]+$/, "Last name must contain letters only"]
  },
  username: { 
    type: String, 
    required: [true, "Username is required"], 
    unique: [ true, "Username already taken"],
    minlength: [4, "Username must be at least 4 characters long"],
    maxlength: [20, "Username cannot exceed 20 characters"]
  },

  email: { 
    type: String, 
    required: [true, "Email is required"],
    unique: true,
   validate: [isEmail, "Please enter a valid email"]
  },


  password: { 
    type: String, 
    required: [true, "Password is required"] 
  }
});


export default mongoose.model('User', userSchema);
