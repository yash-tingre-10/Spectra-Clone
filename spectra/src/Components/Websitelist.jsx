import React, { useState } from "react";

const listStyle =
  "py-2 text-black text-lg hover:text-purple-800 font-medium";

const baseImageUrl =
  "https://cdn.shortpixel.ai/spai/w_1233+q_lossless+ret_img+to_webp/wpspectra.com/wp-content/uploads/2022/08/";

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
  "medical-lab.jpg",
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
  "Doctor Clinics and Hospitals",
];

const Websitelist = () => {
  const [selectedImage, setSelectedImage] = useState(
    `${baseImageUrl}${imageNames[0]}`
  );
  const [selectedLinkIndex, setSelectedLinkIndex] = useState(0);

  const handleLinkClick = (event, imageName, index) => {
    event.preventDefault();
    setSelectedImage(`${baseImageUrl}${imageName}`);
    setSelectedLinkIndex(index);
  };

  return (
    <>
    <div>
  <h1 className="flex justify-center items-center sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold p-0 text-center">
    Largest Library of Pre-built Websites
    <br />
    With One-click Installer
  </h1>
</div>

        
    <div className="flex flex-col md:flex-row justify-center my-20">
        
      <div className="m-0 p-2 min-w-[300px]">
        <ul>
          {imageNames.map((name, index) => (
            <li className="m-4" key={index}>
              <a
                href="#"
                className={`${listStyle} ${
                  selectedLinkIndex === index
                    ? "border-b-2 border-purple-800 py-3"
                    : ""
                }`}
                onClick={(e) => handleLinkClick(e, name, index)}
              >
                {linkNames[index]}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex md:flex-col md:items-center justify-center ">
        <img src={selectedImage} className="m-2 mx-8 h-auto w-[85%]" alt="Selected" />
      </div>
    </div>
    </>
    
  );
};

export default Websitelist;
