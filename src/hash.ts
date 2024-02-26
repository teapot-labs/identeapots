import { MD5 } from "crypto-js";

const salt = "teapotlabs";

/**
 * Hash a string using MD5 and a salt
 * @param str The string to hash
 * @returns The hashed string
 */
export function hashString(str: string): string {
  const seed = str + salt;
  return MD5(seed).toString();
}
