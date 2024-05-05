import { defineCollection, z } from "astro:content";

const libros = defineCollection({
    type: "content",
    schema:z.object({
        heroImg: z.string(),
        title: z.string(),
        autor: z.string(),
        bio: z.string(),
        description: z.string(),
        pubDate: z.string(),
        category: z.string().array(),
        descargar: z.string()
    })
})


const librosItems= defineCollection({
    type:"content",
    schema:z.object({
        imgLibro: z.string()
    })
})



export const collections = {libros, librosItems}