import { Router } from "express";
import { RoleCheck } from "../middleware/roleCheckM.js";
import { FetchEvents, UpdateStatus } from "../controllers/adminC.js";
const router = Router();

router.post('/fetchEvents',RoleCheck(), FetchEvents);
router.post('/updateStatus',RoleCheck(), UpdateStatus );
 
export default router;

