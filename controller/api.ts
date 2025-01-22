import { Request, Response } from "express";
import { fetchUserData, updateUserData } from "@/repository/userCollection";
import { User } from "@/entities/user";

export const fetchUserHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = req.query.userId as string;

  if (!userId) {
    res.status(400).json({
      data: {},
      status: 400,
      message: "User ID is required",
    });
    return;
  }

  try {
    const user = await fetchUserData(userId);
    if (!user) {
      res.status(404).json({
        data: {},
        status: 404,
        message: "User not found",
      });
      return;
    }

    res.status(200).json({
      data: user,
      status: 200,
      message: "User fetch successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      status: 200,
      message: (error as Error).message,
    });
  }
};

export const updateUserHandler = async (
  req: Request,
  res: Response
): Promise<void> => {
  const userId = (req as any).userId;
  const userData: Partial<User> = req.body;
  try {
    const user = await updateUserData(userId, userData);
    res.status(200).json({
      data: user,
      status: 200,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      data: {},
      status: 200,
      message: (error as Error).message,
    });
  }
};
