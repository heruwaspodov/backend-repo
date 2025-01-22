import { Router } from "express";
import { fetchUserHandler, updateUserHandler } from "@/controller/api";
import { authMiddleware } from "@/middleware/authMiddleware";

const router = Router();

router.get("/fetch-user-data", authMiddleware, fetchUserHandler);
router.post("/update-user-data", authMiddleware, updateUserHandler);

export default router;
