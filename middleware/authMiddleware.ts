import { Request, Response, NextFunction } from "express";
import admin from "firebase-admin";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      data: {},
      status: 401,
      message: "Unauthorized: Missing or invalid token format",
    });
    return;
  }

  const tokenParts = authHeader.split("Bearer ");
  if (tokenParts.length !== 2 || !tokenParts[1].trim()) {
    res.status(401).json({
      data: {},
      status: 401,
      message: "Bad Request: Malformed Authorization header",
    });
    return;
  }

  const token = tokenParts[1].trim();

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    (req as any).userId = decodedToken.uid;

    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    res.status(401).json({
      data: {},
      status: 401,
      message: "Invalid token",
    });
  }
};
