import bg from '../public/img/bg.png';
import { useEffect, useRef, useState } from 'react';


const Frame = () => {
  const [image, setImage] = useState(null);
  const canvas = useRef(null);

  useEffect(() => {
    const myImg = new Image();
    myImg.src = '../img/bg.png';
    myImg.onload = () => setImage(myImg);
  }, []);

  useEffect(() => {
    if (image && canvas) {
      const ctx = canvas.current.getContext("2d");
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
      ctx.fillRect(0, 0, 0, 0);
      ctx.drawImage(image, 2, 2);
    }
  }, [image, canvas])

  return <>
    <canvas
      ref={canvas}
      width={1440}
      height={1000}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        width: "100%",
        height: "100%"
      }}
    >
    </canvas>
  </>
}

export default Frame;