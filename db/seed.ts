import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";
const prisma = new PrismaClient();

async function main() {
  const encryptedPassword = await hash("password1234", 12);
  await prisma.user.upsert({
    where: { email: "axiedojo4@gmail.com" },
    update: {},
    create: {
      email: "axiedojo4@gmail.com",
      name: "dojo",
      password: encryptedPassword,
    },
  });
  await prisma.user.upsert({
    where: { email: "equilibrium.dao21@gmail.com" },
    update: {},
    create: {
      email: "equilibrium.dao21@gmail.com",
      name: "equilibrium",
      password: encryptedPassword,
    },
  });

  await prisma.user.upsert({
    where: { email: "inesrodrigues.dev@gmail.com" },
    update: {},
    create: {
      email: "inesrodrigues.dev@gmail.com",
      name: "nocas",
      password: encryptedPassword,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
