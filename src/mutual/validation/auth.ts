import {z} from "zod";

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6 , "please check the length of your goddamn password").max(16 , "big enough...")
});

export const signUpSchema = loginSchema.extend({
    name: z.string(),
    image: z.string(),
});

export type ILog = z.infer<typeof loginSchema>;
export type ISignUp = z.infer<typeof signUpSchema>;