import { useEffect, useState } from "react";

import w1 from "./images/w1.jpg";
import w2 from "./images/w2.jpg";
import w3 from "./images/w3.jpg";
import w4 from "./images/w4.jpg";
import w5 from "./images/w5.jpg";
import w6 from "./images/w6.jpg";

export default function MediaShowcase() {
  const images = [w1, w2, w3, w4, w5, w6];
  const [index, setIndex] = useState(0);

  // 3s stay + 1s slide = change every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="media-left glass">
      <h3>MEDIA SHOWCASE</h3>

      <div className="media-slider">
        <div
          className="media-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((img, i) => (
            <div className="media-slide" key={i}>
              <img src={img} alt={`Media ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
