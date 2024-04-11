import {Router} from "express";
import { Login, Register } from "../controllers/authC.js";
const router = Router();

router.post("/signup", Register);
router.post("/login",Login);
router.get('/',(req,res) => {
    res.send('Hello world');
})

export default router;