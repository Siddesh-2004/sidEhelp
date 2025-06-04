import { Router } from "express";
import { registerUser ,loginUser, logoutUser, refreshAccessToken, checkAuthentication} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router= Router();
router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/refresh').post(refreshAccessToken)
//secure routes
router.route('/me').post(verifyJwt, checkAuthentication)
router.route('/logout').post(verifyJwt, logoutUser)
export default router;