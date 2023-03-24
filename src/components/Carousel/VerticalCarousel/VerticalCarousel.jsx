import dataz from "./Dummydata";
import StyledDiv from "./Carousel.styles";
import { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const VerticalCarousel = () => {
  const [carouselRef, setCarouselRef] = useState();

  const scrollDown = () => {
    if (
      carouselRef.offsetHeight + carouselRef.scrollTop >=
      carouselRef.scrollHeight
    ) {
      return carouselRef.scrollTo(0, 0);
    }
    carouselRef.scrollBy({ top: 141, behavior: "smooth" });
  };
  const scrollUp = () => {
    if (Math.floor(carouselRef.scrollTop) === 0) {
      return carouselRef.scrollTo(0, carouselRef.scrollHeight);
    }
    carouselRef.scrollBy({ top: -141, behavior: "smooth" });
  };
  return (
    <StyledDiv>
      <div className="buttons" onClick={scrollUp}>
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
      <div className="buttons" onClick={scrollDown}>
        <button className="down">
          <FaChevronCircleDown />
        </button>
      </div>
    </StyledDiv>
  );
};
export default VerticalCarousel;
