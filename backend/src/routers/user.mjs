import { Router } from "express";
import user from "../models/user.mjs";
import { hashPassword } from "../utils/helpers.mjs";
const router = Router();


const errors= {};
const erorrHandler= (err)=>{
    if (err.name === "ValidationError") {
        Object.values(err.errors).forEach((e) => {
            errors[e.path] = e.message;
        });
        return errors;
    }

    // 2) Duplication errors (
    if (err.code === 11000) {
        const field = Object.keys(err.keyValue)[0];
        errors[field] = `${field} already exists`;
        return errors;
    }

    // 3) Fallback (any other error)
    errors.general = err.message || "Something went wrong";
    return errors;
}

// Register Route
router.post('/register', async (req, res) => {
    try {
        const body = req.body;
        body.password = await hashPassword(body.password);
        const newUser = await user.create(body);

        res.status(201).json(newUser);

    } catch (err) {
        console.error("REGISTER ERROR:", err);

        erorrHandler(err);
        res.status(400).json(errors);
    }
});
// Auth  Route
router.post('/login', async (req, res) => { 
    const { email, password } = req.body;
    try {
        const loggedInUser = await user.login(email, password);
        res.status(200).json(loggedInUser);
    } catch (err) {
        
         erorrHandler(err);
        res.status(400).json( errors );
    }

});

router.get('/', async(req, res) => {
   try {
    const users= await user.find({});
    res.status(200).json(users);
   } catch(err){
    res.status(500).json({error: 'Internal server error'});
   }
    
});


export default router;