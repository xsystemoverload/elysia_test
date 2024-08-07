import { db } from "../../../database/drizzle";
import { users } from "../../../schema";

export default async function () {
  return await db
    .select({
      id: users.id,
      username: users.username,
    })
    .from(users)
    .execute();
}