import { adminModel } from "../schema/adminSchema.js";
import { studentModel } from "../schema/studentSchema.js";

export function RoleCheck() {
    return async (req, res, next) => {
        try{
            console.log("req reached roleCheck",req.body);
            const body = req.body;
            const { email } = req.body;
            let user;
            user = await adminModel.findOne({ email });
            console.log(user)
            if(!user) {
                user = await studentModel.findOne({ email });

            }
            console.log(user, user.role == "head",user.role == "Student");
            if(user.role == "head"){
                console.log('inside if',req.body);
                req.body = body;
                req.body.role = user.role;
                req.body.driveLink = user.driveLink;
                req.body.committee = user.committee;
                next();
            } 
            else if(user.role == "Student") {
                console.log('inside 1st elseif');
                req.body = body;
                req.body.studentId = user._id;
                req.body.events = user.events;
                req.body.email = user.email;
                req.body.rollNo = user.rollNo;
                console.log('Student body', req.body);
                next();
            }
            else if(user.role != ("head" || "Student")) {
                console.log('inside 2nd elseif',req.body);
                req.body = body;
                req.body.role = user.role;
                req.body.committee = user.committee;
                next();
            }
            else {
                res.json({message: "Not Authorized"})
            }
        } catch(error) {
            console.log(error)
        }
    }
}