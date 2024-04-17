import {Router} from 'express'
import { RoleCheck } from '../middleware/roleCheckM.js';
import { generateQR } from '../controllers/qrC.js';
const router = Router();

router.post("/generateqr",RoleCheck(), generateQR);

export default router;