// //Here we will connect our sanity to our react application
import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client=createClient({
    projectId:'6jbrj0b4',
    dataset:'production',
    useCdn:true,
    apiVersion:'2024-03-11',
    token:process.env.SANITY_SECRET_TOKEN
});


const builder= imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source);

