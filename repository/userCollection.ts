import { db } from "@/config/firebaseConfig";
import { User } from "@/entities/user";

const USERS_COLLECTION = "USERS";

export const fetchUserData = async (userId: string): Promise<User | null> => {
  const userDoc = await db.collection(USERS_COLLECTION).doc(userId).get();
  if (userDoc.exists) {
    return { id: userDoc.id, ...userDoc.data() } as User;
  }
  return null;
};

export const updateUserData = async (
  userId: string,
  userData: Partial<User>
): Promise<User | void> => {
  await db.collection(USERS_COLLECTION).doc(userId).update(userData);
  return userData as User;
};
