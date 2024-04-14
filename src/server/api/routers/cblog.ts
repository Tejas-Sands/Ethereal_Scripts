import {z} from "zod"
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc"
import { blogSchema } from "~/mutual/blogInput/blog"
import { db } from "~/server/db"

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
      const reep = ctx.session.user.id
      console.log(reep)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const result = await ctx.db.blog.create({
       
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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
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

