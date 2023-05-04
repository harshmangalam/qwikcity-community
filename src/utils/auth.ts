import { type RequestEventCommon } from "@builder.io/qwik-city";
import { verifyToken } from "./jwt";
import { prisma } from "~/lib/prisma";

async function getCurrentUser({
  cookie,
  env,
}: RequestEventCommon): Promise<
  [{ id: string } | null, { status: number; message: string } | null]
> {
  const token = cookie.get("accessToken");
  if (!token) return [null, { status: 401, message: "Unauthenticated" }];

  const payload = await verifyToken(
    token.value,
    env.get("JWT_SECRET") as string
  );

  if (!payload) return [null, { status: 401, message: "Unauthenticated" }];

  const user = await prisma.user.findUnique({
    where: {
      id: payload?.userId,
    },
    select: {
      id: true,
    },
  });

  if (!user) return [null, { status: 403, message: "Unauthorized" }];

  return [user, null];
}

export { getCurrentUser };
