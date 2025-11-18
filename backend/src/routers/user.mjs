import { Router } from "express";
import user from "../models/user.mjs";
import { hash } from "bcrypt";
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


router.post('/register', async (req, res) => {
    try {
        const body = req.body;

        const newUser = await user.create(body);

        res.status(201).json(newUser);

    } catch (err) {
        console.error("REGISTER ERROR:", err);

        erorrHandler(err);
        res.status(400).json(errors);
    }
});

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

router.get('/', (req, res) => {
    res.send('User route is working');
});


export default router;