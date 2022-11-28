import React from "react";

const Spinner = () => {
  return (
    <div className="loadingSpinnerContainer">
      <div className="flex items-center justify-center">
        <img
          className="spinning-image"
          src="https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/09/cropped-fav-1.png"
        />
        <img src="https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/09/scl.png" />
      </div>
    </div>
  );
};

export default Spinner;
