const { MD5 } = require("crypto-js");

const salt = "";

/**
 * Hash a string using MD5 and a salt
 * @param {string} str The string to hash
 * @returns {string} The hashed string
 */
exports.hashString = function (str) {
  const seed = str + salt;
  return MD5(seed).toString();
};
