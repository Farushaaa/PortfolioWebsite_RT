import React from "react";

import Services from "./Services";

const ServicesText = () => {
  return (
    <div>
      <h3 className="text-3xl py-1">Services I offer</h3>
      <p className="text-md py-2 leading-7 ">
        Since the beginning of my journey as a freelance designer and developer,
        I've done work for <span className="text-teal-500">agencies</span>{" "}
        consulted for <span className="text-teal-500">startups</span> and
        collaborated with talanted people to create digital products for both
        business and consumer use.
      </p>
      <p className="text-md py-2 leading-7 ">
        I offer from a wide range of services , including programming and
        teaching .
      </p>
      <Services />
    </div>
  );
};

export default ServicesText;
