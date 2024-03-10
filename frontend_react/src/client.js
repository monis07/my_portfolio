// //Here we will connect our sanity to our react application
// import { SanityClient } from "@sanity/client";
// import { ImageUrlBuilder } from "@sanity/image-url";

// export const client=new SanityClient({
//     projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
//     dataset:'production',
//     apiVersion:'2022-02-01',
//     useCdn:true,
//     token:process.env.REACT_APP_SANITY_TOKEN,
// });

// const builder= ImageUrlBuilder(client);

// export const urlFor=(source)=>{
//     return builder.image(source);
// }