import { adminModel } from "../schema/adminSchema.js";
import { studentModel } from "../schema/studentSchema.js";

export function RoleCheck() {
    return async (req, res, next) => {
        try{
            console.log("req reached roleCheck",req.body);
            const body = req.body;
            const { email } = req.body;
            const user = await adminModel.findOne({ email });
            console.log(user, user.role == "head",user.role != ("head" || "student"))
            if(user.role == "head"){
                req.body = body;
                req.body.role = user.role;
                req.body.driveLink = user.driveLink;
                req.body.committee = user.committee;
                next();
            }
            else if(user.role != ("head" || "student")) {
                req.body = body;
                req.body.role = user.role;
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