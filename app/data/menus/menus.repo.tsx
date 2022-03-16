import { PrismaClient } from "@prisma/client";
import { Imenus } from "~/data/menus/menus.interface";

const prisma = new PrismaClient();

export async function findall() {
  await prisma.$connect();
  const menus = await prisma.menus.findMany();

  return menus;
}

export async function save(data: Imenus) {
  await prisma.$connect();
  const menus = await prisma.menus.create({ data: { data } });
  await prisma.$disconnect();

  return menus;
}
