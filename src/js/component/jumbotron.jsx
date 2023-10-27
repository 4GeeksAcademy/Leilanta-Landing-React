import React from "react";

//create your first component
const Jumbotron = () => {
    return (
<div className="jumbotron position-relative p-5 text-muted bg-body">
    <h1 className="text-body-emphasis">A Warm Welcome!</h1>
    <p className="col-lg- mx-auto mb-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio exercitationem, provident, inventore dolore, iste minima explicabo veritatis excepturi illum nulla magni. Eligendi excepturi repellendus voluptatum sed sunt, reiciendis aspernatur. Veniam?
    </p>
    <button className="btn btn-primary px-5 mb-5" type="button">
      Call to action!
    </button>
  </div>
    );
};

export default Jumbotron;