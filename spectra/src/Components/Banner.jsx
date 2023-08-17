import React from "react";

const bannerIMG =
  "https://cdn.shortpixel.ai/spai/w_1536+q_lossless+ret_img+to_webp/wpspectra.com/wp-content/uploads/2023/07/banner-image.png";

const Banner = () => {
  return (
    <div className="text-center py-10 mx-20">
      <h1 className="text-3xl md:text-6xl font-semibold mb-4 font-serif text-center max-w-screen-lg mx-auto">
        Create Your Dream Website With a Visual Website Builder
      </h1>

      <button className="m-5 bg-blue-600 text-white py-4 px-8 hover:bg-blue-700">
        Get Started
      </button>

      <div className="text-center mt-8">
        <img src={bannerIMG} className="mx-auto w-auto" alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
