import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import VerticalCarousel from "../Carousel/VerticalCarousel/VerticalCarousel";
import HorizontalCarousel from "../Carousel/HorizontalCarousel/HorizontalCarousel";
const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  margin: 6rem 10rem 0;
  h1 {
    text-align: center;
    font-size: var(--fs-custom);
    margin: 0;
  }
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin: 1rem 0 0;
  }
  @media screen and (max-width: 912px) {
    margin: 6rem 0 0;
    h1 {
      font-size: var(--fs-xxl);
    }
    & > div {
      grid-template-columns: 1fr;
      margin-top: 0;
    }
  }
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <StyledDiv>
        <h1>CELEBRITREE</h1>
        <div>
          <HorizontalCarousel />
          <VerticalCarousel />
        </div>
      </StyledDiv>
    </>
  );
};

export default Home;
