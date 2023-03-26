import dataz from "./Dummydata";
import SVerticalCarousel from "./Carousel.styles";
import { useEffect, useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const VerticalCarousel = () => {
  const [carouselRef, setCarouselRef] = useState();

  const scroll = (type) => {
    if (type === "down") {
      if (
        carouselRef.offsetHeight + carouselRef.scrollTop >=
        carouselRef.scrollHeight
      ) {
        return carouselRef.scrollTo(0, 0);
      }
      carouselRef.scrollBy({ top: 141, behavior: "smooth" });
    } else {
      if (Math.floor(carouselRef.scrollTop) === 0) {
        return carouselRef.scrollTo(0, carouselRef.scrollHeight);
      }
      carouselRef.scrollBy({ top: -141, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [scroll]);

  return (
    <SVerticalCarousel>
      <div className="buttons" onClick={() => scroll("up")}>
        <button className="up">
          <FaChevronCircleUp />
        </button>
      </div>
      <div ref={setCarouselRef} className="carousel">
        {dataz.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.img} />
              <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons" onClick={() => scroll("down")}>
        <button className="down">
          <FaChevronCircleDown />
        </button>
      </div>
    </SVerticalCarousel>
  );
};
export default VerticalCarousel;
