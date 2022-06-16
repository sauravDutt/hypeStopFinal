export default {
    name: 'preorders',
    title: 'Preorders',
    type: 'document',
    fields: [
        {
            name: 'preorderImage',
            title: 'Image',
            type: 'array',
            of:[{type:'image'}],
            options: {
                hotspot: true, 
            }
        },
        {
            name: 'preorderName',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'preorderSlug',
            title: 'Slug',
            type: 'slug',
            options: {
                sources: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'preorderPrice',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'preorderDetails',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'preorderTag',
            title: 'Tag',
            type: 'string',
        }
    ]
}