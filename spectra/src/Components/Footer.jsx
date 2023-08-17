import React from "react";
import { Footeritem } from "./Footeritem";

const footerLinks = {
  "OUR PRODUCTS": [
    { text: "Astra Theme", url: "#" },
    { text: "Ultimate Addons for Elementor", url: "#" },
    { text: "Ultimate Addons for Beaver Builder", url: "#" },
    { text: "Schema Pro", url: "#" },
    { text: "Convert Pro", url: "#" },
    { text: "WP Portfolio", url: "#" },
  ],
  FEATURES: [
    { text: "Visual Website Builder", url: "#" },
    { text: "Container Layout", url: "#" },
    { text: "SEO and Performance", url: "#" },
    { text: "Blocks", url: "#" },
    { text: "Workflow Optimization", url: "#" },
  ],
  RESOURCES: [
    { text: "What’s New", url: "#" },
    { text: "Knowledge Base", url: "#" },
    { text: "Support", url: "#" },
    { text: "Blog", url: "#" },
    { text: "Affiliate Program", url: "#" },
  ],
  COMPANY: [
    { text: "About", url: "#" },
    { text: "Support Policy", url: "#" },
    { text: "Privacy Policy", url: "#" },
    { text: "Terms and Condition", url: "#" },
    { text: "Contact", url: "#" },
  ],
};

const Footer = () => {
  return (
    <div className="bg-creamyt">
      <div className="m-0 p-4 grid grid-cols-2 gap-4 md:grid-cols-4">
        <Footeritem heading="OUR PRODUCTS" links={footerLinks["OUR PRODUCTS"]} />
        <Footeritem heading="FEATURES" links={footerLinks["FEATURES"]} />
        <Footeritem heading="RESOURCES" links={footerLinks["RESOURCES"]} />
        <Footeritem heading="COMPANY" links={footerLinks["COMPANY"]} />
      </div>
      
  <div className="text-center h-16">
    Copyright © 2023 | Built With ❤️ on Spectra
  </div>


    </div>
  );
};

export default Footer;
