import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { testimonials } from "./data";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full">
      <p className="text-2xl font-bold text-center">Our Testimonials</p>
      <div className="w-3/4 p-4 mx-auto my-24 md:w-1/2">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="italic testimonial-slide">
              <p className="text-2xl">{testimonial.text}</p>
              <p className="font-bold text-right testimonial-author">
                {testimonial.author}.
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
