import * as trpc from "@trpc/server"
import { hash } from "argon2";
import { loginSchema, signUpSchema } from "~/mutual/validation/auth";
import { createTRPCContext, createTRPCRouter, publicProcedure } from "../trpc";
import { redirect } from "next/navigation";

export const serverRouter = createTRPCRouter({
    signUp : publicProcedure
    .input(signUpSchema)
    .mutation(async({ input , ctx}) => {
        const {name , email , password, image} = input;

        const exists = await ctx.db.user.findUnique({
            where: {email},
        });
        if (exists){
            throw new trpc.TRPCError({
                message: " user already exist"
            });
        }
        const hashedPassword = await hash(password);

        const result = await ctx.db.user.create({
            data: { name, email , password: hashedPassword, image:image },
        });
        
        return {     
            message: `${result.email} created successfully`
        }
    })
})

// input: signUpSchema,
//   resolve: async ({ input, ctx }) => {
//     const { username, email, password } = input;

//     const exists = await ctx.prisma.user.findFirst({
//       where: { email },
//     });

//     if (exists) {
//       throw new trpc.TRPCError({
//         code: "CONFLICT",
//         message: "User already exists.",
//       });
//     }

//     const hashedPassword = await hash(password);

//     const result = await ctx.prisma.user.create({
//       data: { username, email, password: hashedPassword },
//     });

//     return {
//       status: 201,
//       message: "Account created successfully",
//       result: result.email,
//     };
//   },
// });
