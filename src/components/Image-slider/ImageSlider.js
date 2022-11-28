import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const ImageSlider = ({ slides }) => {
  const images = [
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/09/scl-nigeria-abuja.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/Veg_6.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/scl_farm_main.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/Apiary_2.png",
    "https://firstmultiplemfbank.com/sclnew/wp-content/uploads/2022/10/Veg_4.png",
  ];

  return (
    <div className="rounded-lg my-20">
      <Carousel infiniteLoop autoPlay>
        {images.map((item, index) => (
          <div key={index} className="image rounded-lg">
            <img src={item} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
