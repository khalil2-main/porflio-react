import mongoose from "mongoose";
import validator from "validator";

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
   validate: [validator.isEmail, "Please enter a valid email"]
  },


  password: { 
    type: String, 
    required: [true, "Password is required"] 
  },
  image: {
    data: Buffer,          // stores the raw image bytes
    contentType: String    
  }
},{strict: true});

userSchema.statics.login= async function(email,password){
  const user= await this.findOne({email});
  if(!user){
    throw  Error('incorrect Email')
  }
  if(!comparePassword(password,user.password)){
    throw Error("incorrect password")
  }
  return user;
}


export default mongoose.model('User', userSchema);
