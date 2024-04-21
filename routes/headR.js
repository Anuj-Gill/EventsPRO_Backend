import {Router} from "express"
import { RoleCheck } from "../middleware/roleCheckM.js";
import { DeleteEvent, EventRegister } from "../controllers/headC.js";

const router = Router();

router.post("/createEvent", RoleCheck(), EventRegister);
router.post('/deleteevent', RoleCheck(), DeleteEvent);


export default router;
