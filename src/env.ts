import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_USERNAME: z.string().min(1).max(20),
    VITE_PASSWORD: z
      .string()
      .min(5)
      .max(20)
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/),
  },
  runtimeEnvStrict: {
    VITE_USERNAME: import.meta.env.VITE_USERNAME,
    VITE_PASSWORD: import.meta.env.VITE_PASSWORD,
  },
});
