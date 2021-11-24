import "react-slideshow-image/dist/styles.css";
import { Slide } from 'react-slideshow-image';

const Slider = () => {
  const properties = {
    duration: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
    arrows: true
  };

  return <>
    <Slide {...properties}>
      <div className="bg-gray-300 w-auto m-2 border-1 border-gray-500 rounded-lg p-10 filter drop-shadow-lg">1x3x12</div>
      <div className="bg-gray-300 w-auto m-2 border-1 border-gray-500 rounded-lg p-10 filter drop-shadow-lg">2x4x12</div>
      <div className="bg-gray-300 w-auto m-2 border-1 border-gray-500 rounded-lg p-10 filter drop-shadow-lg">2x6x12</div>
      <div className="bg-gray-300 w-auto m-2 border-1 border-gray-500 rounded-lg p-10 filter drop-shadow-lg">2x2x4x24</div>
    </Slide>
  </>
}

export default Slider;