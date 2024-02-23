// import { z } from "zod";

// import {
//   createTRPCRouter,
//   protectedProcedure,
//   publicProcedure,
// } from "~/server/api/trpc";

// export const postRouter = createTRPCRouter({
//   hello: publicProcedure
//     .input(z.object({ text: z.string() }))
//     .query(({ input }) => {
//       return {
//         greeting: `Hello ${input.text}`,
//       };
//     }),

//   create: protectedProcedure
//     .input(z.object({ name: z.string().min(1) }))
//     .mutation(async ({ ctx, input }) => {
//       // simulate a slow db call
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       return ctx.db.post.create({
//         data: {
//           name: input.name,
//           createdBy: { connect: { id: ctx.session.user.id } },
//         },
//       });
//     }),

//   getLatest: protectedProcedure.query(({ ctx }) => {
//     return ctx.db.post.findFirst({
//       orderBy: { createdAt: "desc" },
//       where: { createdBy: { id: ctx.session.user.id } },
//     });
//   }),

//   getSecretMessage: protectedProcedure.query(() => {
//     return "you can now see this secret message!";
//   }),
// });

import {z} from "zod"
import { createTRPCRouter, protectedProcedure } from "../trpc"
import { blogSchema } from "~/mutual/blogInput/blog"

// const sessionData = await getServerSession();
export const makeBlog = createTRPCRouter({
    blog: protectedProcedure
    .input(z.object({
      Bname: z.string(),
      article: z.string(),
      image: z.string(),
      imaget: z.optional(z.string()),
      createdBy: z.string()
    }))
    .mutation(async ({ ctx, input }) => {
      // const { Bname , article , image , image2, createdBy} = input; // Destructure input to get imp items
      const reep = ctx.session.user.id
      console.log(reep)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const result = await ctx.db.blog.create({
        // data: blogSchema.parse(input),
       
        data: { Bname:input.Bname,
                // article: article,
                // image: img,
                // image2: image,
                article:input.article,
                image:input.image,
                imaget:input.image2,
                createdBy: {connect: {id: ctx.session.user.id}},
                },
        });
        
      return {     
        message: `${result.title} created successfully`
    }
  })   
    })
//             const {Bname , article , image, imaget, createdBy} = input;
//               // simulate a slow db call
//               // await new Promise((resolve) => setTimeout(resolve, 1000));
        
//               const result = ctx.db.blog.create({
//                 data: { Bname: Bname,article: article,image:image, imaget:imaget,
//                   createdBy: { connect: { id: ctx.session.user.id } },
//                 },
//               });

//               return {
//                 message: `kovsvodskv`
//               }
//             }),
// 

// ctx.db.blog
