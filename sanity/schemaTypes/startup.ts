
import { defineField, defineType } from "sanity";

export const startup = defineType(schemaDefinition: {
name: 'startup',
title: 'Startup',
type: 'document',

fields: [
    defineField(schemaField:{
        name: 'title',
        type: 'string'
    }),
    defineField(schemaField:{
        name: 'slug',
        type: 'slug',
        options: {
            source: 'title'
        }
    }),
    defineField(schemaField:{
        name: 'author',
        type: 'reference',
        to: {type: 'author'}
    }),
    defineField(schemaField:{
        name: 'views',
        type: 'number'
    }),
    defineField(schemaField:{
        name: 'description',
        type: 'text'
    }),
    defineField(schemaField:{
        name: 'category',
        type: 'string',
        validation: (Rule) => Rule.min(minNumber: 1).max( maxNumber: 20).required().error('Please enter a category')
    }),
    defineField(schemaField:{
        name: 'image',
        type: 'url',
        validation: (Rule)=> Rule.required(),
    }),
    defineField(schemaField:{
        name: 'pitch',
        type: 'markdown'
    }),
],
}

})