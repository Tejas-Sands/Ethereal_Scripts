import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "~/server/db";

const userSchema = z.object({
    name: z.string(),
    email: z.string()
});

const signUpSchema = z.object({
    email : z.string(),
    password: z.string().min(6, "password should more than 6 letters")
})

export const signUp = createTRPCRouter({
    signUp: publicProcedure
    .input(signUpSchema)
    .mutation(({input , ctx}) => {
        return ctx.db.user.create({
            data: signUpSchema.parse(input)
        });
    }),
});

export const exampleStuff = createTRPCRouter({
    getAll: publicProcedure.query(({ctx}) => {
        return db.user.findMany();
    }),

    createUsers: publicProcedure
    .input(userSchema)
    .mutation(({input, ctx}) =>{ 
    return ctx.db.user.create({
    data: userSchema.parse(input)
    });
}),
});