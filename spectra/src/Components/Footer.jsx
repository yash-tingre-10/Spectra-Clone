import React from 'react'
import { Footeritem } from './Footeritem'

const Footer = () => {
  return (
    <div>
        <div className='bg-blue-200 m-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
            <Footeritem />
            <Footeritem />
            <Footeritem />
            <Footeritem />
        </div>
    </div>
  )
}

export default Footer