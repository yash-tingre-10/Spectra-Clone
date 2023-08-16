import React from 'react';

export const Footeritem = ({ heading, links }) => {
  return (
    <div className=''>
      <h2 className='text-xl font-semibold font-serif m-2'>{heading}</h2>
      <ul className='m-4'>
        {links.map((link, index) => (
          <li key={index}> <a href={link.url}>{link.text}</a> </li>
        ))}
      </ul>
    </div>
  );
};
