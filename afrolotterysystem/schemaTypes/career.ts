export default {
    name:'careers',
    type:'document',
    title:'careers',
    fields:[
        {
            name: 'role',
            type: 'string',
            title: 'role'
        },
        {
            name:'location',
            type:'string',
            title:'location'
        },
        {
            name: 'document',
            type: 'file',
            title: 'Document',
            options: {
              accept: '.pdf,.doc,.docx' // Optionally, specify accepted file types
            },
        },
       
       
        
    ]

}