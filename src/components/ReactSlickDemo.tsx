import Slider from "react-slick";

const ReactSlickDemo = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} {...props}>
      {/* Example slides */}
      <div>
        <img src="https://via.placeholder.com/400" alt="Example 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/400" alt="Example 2" />
      </div>
    </Slider>
  );
};

export default ReactSlickDemo;
