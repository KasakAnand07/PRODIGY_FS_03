import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce, or electronic commerce, refers to the buying and selling
          of goods and services over the internet. It encompasses a wide range
          of online business activities, including online retail, digital
          services, and marketplaces where multiple vendors can sell their
          products. E-commerce enables businesses and consumers to engage in
          transactions conveniently from anywhere at any time, revolutionizing
          traditional commerce by offering a seamless and efficient shopping
          experience.
        </p>
        <p>
          E-commerce websites typically display a variety of elements to
          facilitate the shopping experience. E-commerce enables businesses and
          consumers to engage in transactions conveniently from anywhere at any
          time, revolutionizing traditional commerce by offering a seamless and
          efficient shopping experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
