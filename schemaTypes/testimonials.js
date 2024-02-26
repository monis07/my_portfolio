export default {
    name:'testimonials',
    title:'Testimonials',
    type:'document',                   //type of that specific schema
    fields:[                           //array of fields that our testimonial object will have
        {
            name:'name',               //a person that will leave a testimonial
            title:'Name',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type:'image',
            options:{
                hotspot:true //this will allow us to crop the image
            }
        },
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }                      
    ]

}