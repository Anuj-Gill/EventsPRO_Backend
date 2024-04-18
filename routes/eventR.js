import {Router} from 'express'
import { RoleCheck } from '../middleware/roleCheckM.js';
import { FetchStatus, RegisterEvent, StudentDetails } from '../controllers/eventsC.js';
const router = Router();

router.post("/registerEvent", RoleCheck(), RegisterEvent);
router.post("/checkstatus", RoleCheck(), FetchStatus);
router.post("/studentDetails", RoleCheck(), StudentDetails);

export default router;