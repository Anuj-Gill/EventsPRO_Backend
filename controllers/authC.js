import { adminModel } from "../schema/adminSchema.js";
import { studentModel } from "../schema/studentSchema.js";
import { comparePwd, encrypt } from "../utils/Encryption.js";
import { signToken } from "../utils/JWT.js";
import { ValidateEmail } from "../utils/ValidateEmail.js";


export async function Register (req, res) {
    try {
        const { email, password } = req.body;
        const user = await studentModel.findOne({ email:email });
        if (user) {
            return res.status(403).json({ message: 'User already exists' });
        }
        const check = ValidateEmail(email);
        if (check.success) {
            const hashedPassword = await encrypt(password);
            const newUser = await new studentModel({ ...req.body, password: hashedPassword }).save();
            console.log("Signed Up successfully. Please Log In now!!");
            res.status(201).json({ success: true, message: "Signed Up successfully. Please Log In now!!", user: newUser});
        }
        else {
            res.status(400).json({
                message: "Invalid email format",
                details: {
                    email: "Email address is not valid",
                },
            });
        }
    }
    catch (error) {
        console.log(error)
    }
}

export async function Login(req,res){
    try {
        console.log(req.body)
        const { email, password } = req.body;
        let user = await studentModel.findOne({ email });
        if (!user) {  
            user = await adminModel.findOne({ email });
            if(!user){
                return res.status(401).send({ message: "Email not registered!" });
            }
        };
        const isMatch = await comparePwd(password, user.password);
        console.log('line 48', isMatch);
        if (!isMatch) {
          return res.status(401).send({ message: 'Invalid password' })
        }
        const token = signToken({ email:user.email ,id: user._id });
        console.log('line 53', token)
        res.status(200).json({ status: true, message: 'Login Successfull', token, role: user.role });
      } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
      }
}