import styled from "styled-components";
import CarouselWrapper from "./Carousel";
import data from "./Dummydata";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  height: 410px;
  img {
    height: 305px;
    width: 100%;
  }
  h3 {
    margin: 10px 0 0;
  }
`;

const HorizontalCarousel = () => {
  return (
    <CarouselWrapper>
      {data.map((data) => {
        return (
          <StyledDiv key={data.id}>
            <img src={data.img} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </StyledDiv>
        );
      })}
    </CarouselWrapper>
  );
};
export default HorizontalCarousel;
