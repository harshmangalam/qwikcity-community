import { type RequestEvent } from "@builder.io/qwik-city";
import { verifyToken } from "./jwt";
import { prisma } from "~/lib/prisma";

async function getCurrentUser({ cookie, env, error }: RequestEvent) {
  try {
    const token = cookie.get("accessToken");
    if (!token) return error(401, "Unauthenticated");

    const payload = await verifyToken(
      token.value,
      env.get("JWT_SECRET") as string
    );

    if (!payload) return error(401, "Unauthenticated");

    const user = await prisma.user.findUnique({
      where: {
        id: payload?.userId,
      },
    });

    if (!user) throw error(403, "Unauthorized");

    return user;
  } catch (err) {
    console.log(err);
    return error(500, "Internal Server Error");
  }
}

export { getCurrentUser };
