import express from 'express';
const authController = require('../controller/auth_controller');
const router = express.Router();

router.get('/testing', authController.testRoute);



export default router;