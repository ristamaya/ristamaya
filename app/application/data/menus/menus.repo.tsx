import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function findall() {
  await prisma.$connect();
  const menus = await prisma.menus.findMany();

  return menus;
}
