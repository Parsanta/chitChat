import User from "../models/userModel";


export const signup = async (req, res, next) => {
    try{
        const {email,password} = req.body;
        if(email || password) {
            return res.status(400).send("Email and password is required")
        }
        const user = await User.create({email: email, password: password});
    }
    catch(error){
        console.error(error);
        return res.status(500).send("internal error");
    }
}