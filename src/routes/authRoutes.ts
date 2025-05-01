import { Router } from "express";
import {
  register,
  login,
  logout,
  resetPassword,
  resetPasswordRequest
} from "../controllers/authController";
import {
  registerSchema,
  loginSchema,
  resetPasswordSchema,resetRequestSchema
} from "../common/validators/authValidator";
import isAuthenticated from "../middlewares/authMiddleware";
import validate from "../middlewares/validate";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);
router.get("/logout", isAuthenticated, logout);
router.post("/reset", validate(resetPasswordSchema), resetPassword);
router.post("/reset-password",validate(resetRequestSchema),resetPasswordRequest);

export default router;
