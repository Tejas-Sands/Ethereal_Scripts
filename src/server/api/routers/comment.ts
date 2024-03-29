import {z} from "zod";
import { createTRPCRouter,publicProcedure, protectedProcedure } from "../trpc";
import {db} from "~/server/db";

// const commentSchema = z.object({
//     name: z.string(),
//     content: z.string()
// });

const idSchema = z.object({
    id: z.string()
});

export const comment = createTRPCRouter({
    showComment: publicProcedure.query(({ctx}) => {
        return ctx.db.comments.findMany((
            where: {
                id: bid
            },
        ));
    }),

    // commentit: protectedProcedure
    // .input(z.object({
    //     image: z.string(),
    //     name: z.string(),
    //     content: z.string(),
    //     id: z.string(),
    //     // createdBy: z.string()
    // }))
    // .mutation(async ({input, ctx}) => {
    //     const result =  ctx.db.comments.create({
    //         data: { image: ctx.session.user.image,
    //                 name: ctx.session.user.name,
    //                 content: input.content,
    //                 // createdBy: {connect: {id: ctx.session.user.id}}
    //                 id: 
    //         },
    //         });
    // }),

    // delcomment: protectedProcedure
    // .input(idSchema)
    // .mutation(({input, ctx})=> {
        return ctx.db.comments.delete({
            where: idSchema.parse(input)
        })
    })
})