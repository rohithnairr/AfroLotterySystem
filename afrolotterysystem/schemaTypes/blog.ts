export default {
    name:'blog',
    type:'document',
    title:'Blog',
    fields:[
        {
            name: 'title',
            type: 'string',
            title: 'Title of blog article'
        },
        {
            name:'slug',
            type:'slug',
            title:'slug of ',
            options: {
                source :'title'
            }
        },
        {
            name:'titleofImage',
            type:'image',
            title:'Title of '
        },
        {
            name:'smallDescription',
            type:'text',
            title:'Small Description'
        },
        {
            name:'content',
            type:'array',
            title:'Content',
            of:[
                {
                    type:'block'
                },
            ]

        }
        
    ]

}