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
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"
import { blogSchema } from "~/mutual/blogInput/blog"
import { db } from "~/server/db"

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
                article:input.article,
                image:input.image,
                imaget:input.image2,
                createdBy: {connect: {id: ctx.session.user.id}},
                },
        });
        
      return {     
        message: `${result.title} created successfully`
    }
  }),
    getAllBlog: publicProcedure.query(({ctx}) => {
      return db.blog.findMany();
  }),
    getById: publicProcedure
    .input(z.object({
      bid: z.number(),
    }))
    .query(({ctx, input}) => {
      return db.blog.findUnique({
        where: {bid: input.bid},
        include: {comments: true},
    });
    }),

    commentit: protectedProcedure
    .input(z.object({
        image: z.string(),
        name: z.string(),
        content: z.string(),
        createdBy: z.string(),
        blogId: z.number(),
    }))
    .mutation(async ({ctx, input}) => {


      const reep = ctx.session.user.id
      console.log(reep)
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // if (!ctx.session || !ctx.session.user) {
      //   throw new Error('Unauthorized');
      // }
      const image = ctx.session.user.image || 'https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        const result = await ctx.db.comments.create({
            data: { image: image ,
                    name: ctx.session.user.name,
                    content: input.content,
                    createdBy: {connect: {id: ctx.session.user.id}} ,
                    blogId: {connect:{bid: input.blogId}}
            },
            });
            return {     
              message: `${result.content} created successfully`
          }
    }),

    
    })
// //             const {Bname , article , image, imaget, createdBy} = input;
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
