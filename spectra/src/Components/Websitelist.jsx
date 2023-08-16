import React, { useState } from 'react';

const listStyle = "m-4 p-4 text-black text-lg hover:text-purple-800 font-medium";

const baseImageUrl = "https://cdn.shortpixel.ai/spai/w_1233+q_lossless+ret_img+to_webp/wpspectra.com/wp-content/uploads/2022/08/";

const imageNames = [
  "fitness-website.jpg",
  "ecommerce-starter-template.jpeg",
  "pizza-website.jpg",
  "elearning-yoga.jpg",
  "plumber-service.jpg",
  "big-small-agency.jpg",
  "pet-care.jpg",
  "hotel-industry.jpg",
  "yoga-template.jpg",
  "medical-lab.jpg"
];

const linkNames = [
  "Blogs and Portfolio",
  "Ecommerce Website",
  "Restaurants and Cafes",
  "E-Learning Website",
  "Local Business",
  "Small / Big Agencies",
  "Pet Care and Clinics",
  "Tourist and Hotel Industry",
  "Health and Fitness",
  "Doctor Clinics and Hospitals"
];

const Websitelist = () => {
  const [selectedImage, setSelectedImage] = useState(`${baseImageUrl}${imageNames[0]}`);

  const handleLinkClick = (event, imageName) => {
    event.preventDefault();
    setSelectedImage(`${baseImageUrl}${imageName}`);
  };

  return (
    <div className='flex flex-row'>
      <div className=''>
        <ul>
          {imageNames.map((name, index) => (
            <li className='m-4' key={index}>
              <a
                href='#'
                className={listStyle}
                onClick={(e) => handleLinkClick(e, name)}
              >
                {linkNames[index]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=''>
        <img src={selectedImage} alt='Selected' />
      </div>
    </div>
  );
};

export default Websitelist;
