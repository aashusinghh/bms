import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
console.log("DATABASE_URL package prisma:", process.env.DATABASE_URL);
// console.log("process:", process.env);
console.log("pr ", process.cwd());

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const client = new PrismaClient({
  adapter,
});