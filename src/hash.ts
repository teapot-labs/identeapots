import { MD5 } from "crypto-js";

/**
 * Hash a string using MD5 and a salt.
 * @param str The string to hash.
 * @param salt The salt to use for hashing.
 * @returns The hashed string.
 */
export function hashString(str: string, salt: string = ""): string {
  const seed = str + salt;
  console.log(seed);
  return MD5(seed).toString();
}
