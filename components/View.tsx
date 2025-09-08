import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { START_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'
import IncrementViews from './Incrementviews'


const View = async ({ id }: { id: string }) => {
    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(START_VIEWS_QUERY, { id })
    
 
  return (
    <div className='view-container'>
          <div className='absolute -top-2 -right-2'>
              <Ping/>
          </div>
          <p className='view-text'>
              <span className='font-black'>Views {totalViews}</span>
          </p>
          <IncrementViews id={id} />
    </div>
  )
}

export default View
