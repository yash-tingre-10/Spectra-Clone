import React from 'react';

export const Footeritem = ({ heading, links }) => {
  return (
    <div className=''>
      <h2 className='text-lg font-semibold font-serif'>{heading}</h2>
      <ul className='m-0'>
        {links.map((link, index) => (
          <li className='my-2' key={index}> <a href={link.url}>{link.text}</a> </li>
        ))}
      </ul>
    </div>
  );
};
