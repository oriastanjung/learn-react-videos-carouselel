import { z } from "zod";

export const feedbackFormSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .email({ message: "Email is Not Valid" }),
    password: z.string({ required_error: "Password is Required" }).min(8),
});
