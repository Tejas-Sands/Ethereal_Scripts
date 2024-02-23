import {z} from "zod";

export const blogSchema = z.object({
    Bname: z.string(),
    article: z.string(),
    image: z.string(),
    imaget: z.optional(z.string()),
    createdBy: (z.optional(z.string()))


});


export type blogInput = z.infer<typeof blogSchema>;
