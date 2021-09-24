import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="Home container">
      <div className="row pb-4">
        <div className="col-lg-6 col-12">
          <div className="text-center para pt-4 mt-4">
            <h4 className="py-4 fw-bold text-justify">
              Real solutions for real needs
            </h4>
            <p className="text-muted text-justify">
              Nothing at Convoy of Hope happens by accident. Convoy works
              alongside communities to identify the root causes of the problems
              they face and then combines efforts to improve lives. Convoy of
              Hope’s strategically designed programs unlock capacity for growth
              and are fueled by kindness. They are multifaceted. Holistic.
              Life-changing.
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <div className="text-center">
            <img
              src="https://convoyofhope.org/wp-content/uploads/2021/04/coh-trucks-fleet.jpg"
              className="img-fluid img-thumbnail"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
