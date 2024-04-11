import {Router} from "express"
import { RoleCheck } from "../middleware/roleCheckM.js";
import { EventRegister } from "../controllers/headC.js";

const router = Router();

router.post("/createEvent", RoleCheck(), EventRegister);


export default router;
