import { Router } from 'express';
import authController from '../controllers/authController';


const router = Router();

const {
    signup,
    signin,
    verifyAccount
} = authController;


router.post('/signup', signup);
router.post('/signin', signin);
router.post('/verifyaccount', verifyAccount);


export default router;