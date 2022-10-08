import { z } from "zod";

const signupUserSchema = z
  .object({
    email: z.string().email({
      message: "Email is not valid",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters",
    }),
    confirmPassword: z.string({
      required_error: "Confirm password is required",
    }).min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type signupUserType = z.infer<typeof signupUserSchema>;

export default signupUserSchema;
