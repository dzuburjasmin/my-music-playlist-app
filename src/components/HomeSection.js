import React from "react";

const HomeSection = (props) => {
  return (
    <section className="sectionone py-5 mt-5 text-center text-dark">
      <div className="d-lg-flex align-items-center justify-content-">
        <div className="container mt-5 ">
          <h1 className="headingmainpage">My Music</h1>
          <p className="subhead">
            All your favourite songs. <br />
            Anytime, anywhere.
          </p>
        </div>
        <div className="container">
          <img
            className="img-fluid w-70 d-block mx-auto p-0 notaslika"
            src={props.note}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default HomeSection;
