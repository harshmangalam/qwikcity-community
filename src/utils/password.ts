import { compare, hash } from "bcrypt";

async function createPasswordHash(password: string) {
  return hash(password, 12);
}

async function comparePassword(data: string, encrypted: string) {
  return compare(data, encrypted);
}

export { createPasswordHash, comparePassword };
