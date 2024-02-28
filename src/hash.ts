/**
 * Hash a string using MD5 and a salt.
 * @param str The string to hash.
 * @param salt The salt to use for hashing.
 * @returns The hashed string.
 */
export async function hashString(str: string, salt: string = ""): Promise<string> {
  const msgUint8 = new TextEncoder().encode(str + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}
