// //Here we will connect our sanity to our react application
import {createClient} from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client=createClient({
    projectId:'6jbrj0b4',
    dataset:'production',
    useCdn:true,
    apiVersion:'2024-03-18',
    token:'skltyhcuYwjslnTXKhLApsJHBXCgGM45hcOWlSZwXbCTeOibr0wGSDy3uecEp5U3TQW8f7X3FB9wHKHnqIDeHwaf8AgRqg6ygMoeqQjHMIr5PJ5tx8xh09Zsmu4Ohk9Ka4xAmdGPyuePhafvgiCOsLi1Y8fcbs8RtYFPcimaEMdx3XqpcCE4'
});


const builder = imageUrlBuilder(client);

export const urlFor = (source)=>builder.image(source);

