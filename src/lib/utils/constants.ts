import { AES, enc } from "crypto-js";
import Cookies from "js-cookie";
import { env } from "~/env";

export const { VITE_PASSWORD, VITE_USERNAME } = env;

export const decryptedUsername = AES.decrypt(
  Cookies.get("username") !== undefined
    ? (Cookies.get("username") as string)
    : "username",
  "username"
).toString(enc.Utf8);

export const decryptedPassword = AES.decrypt(
  Cookies.get("password") !== undefined
    ? (Cookies.get("password") as string)
    : "password",
  "password"
).toString(enc.Utf8);

export const decryptedRegisteredAccount = AES.decrypt(
  Cookies.get("registered-account") !== undefined
    ? (Cookies.get("registered-account") as string)
    : "registered-account",
  "registered-account"
).toString(enc.Utf8);
