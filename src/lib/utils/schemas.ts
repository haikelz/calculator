import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is Required!" }),
  password: z
    .string()
    .min(1, { message: "Password is Required!" })
    .min(5, { message: "Please enter the longer password!" })
    .max(20, { message: "The password that you enter is too long" })
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/, {
      message:
        "The password must containts alphabet, number, and special character",
    }),
});

export const registerSchema = z.object({
  username: z.string().min(1, { message: "Username is Required!" }),
  password: z
    .string()
    .min(1, { message: "Password is Required!" })
    .min(5, { message: "Please enter the longer password!" })
    .max(20, { message: "The password that you enter is too long" })
    .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/, {
      message:
        "The password must containts alphabet, number, and special character",
    }),
});
