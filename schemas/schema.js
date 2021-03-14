// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import custom schemas
import productImage from './productImage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    productImage,
    {
      title: 'Site Content',
      name: 'siteContent',
      type: 'document',
      fields: [
        {
          title: 'Title (logo)',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Header Line 1',
          name: 'headerLine_1',
          type: 'string',
        },
        {
          title: 'Header Line 2',
          name: 'headerLine_2',
          type: 'string',
        },
        {
          title: 'Header Indent Line 1',
          name: 'headerIndentLine_1',
          type: 'string',
        },
        {
          title: 'Header Indent Line 2',
          name: 'headerIndentLine_2',
          type: 'string',
        },
        {
          title: 'Featured Images',
          name: 'featuredImages',
          type: 'array',
          of: [{type: 'image'}],
          validation: Rule => Rule.max(2),
        },
        {
          title: 'About Section Title',
          name: 'aboutTitle',
          type: 'string',
        },
        {
          title: 'About Section Content',
          name: 'aboutContent',
          type: 'text',
        },
        {
          title: 'Instagram Link',
          name: 'instagramUrl',
          type: 'url',
        },
        {
          title: 'Depop Link',
          name: 'depopUrl',
          type: 'url',
        },
      ]
    },
    {
      title: 'Product',
      name: 'product',
      type: 'document',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Product Image',
          name: 'image',
          type: 'productImage',
        },
        {
          title: 'Price',
          name: 'price',
          type: 'string',
        },
        {
          title: 'Depop Link',
          name: 'depopUrl',
          type: 'url',
        }
      ]
    },

  ]),
})
