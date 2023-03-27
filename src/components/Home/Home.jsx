import styled from "styled-components";
import VerticalCarousel from "../Carousel/VerticalCarousel/VerticalCarousel";
import HorizontalCarousel from "../Carousel/HorizontalCarousel/HorizontalCarousel";
import ArticleNavigation from "../Articles/Navigation/ArticleNavigation";
import Pagebreak from "../UI/Pagebreak";
const StyledDiv = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr;
  margin: 6rem 6rem 0;
  h1 {
    text-align: center;
    font-size: var(--fs-custom);
    margin: 0;
  }
  .home__carousels {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin: 1rem 0 0;
  }

  @media screen and (max-width: 912px) {
    margin: 6rem 1rem 0;
    h1 {
      font-size: var(--fs-xxl);
    }
    .home__carousels {
      grid-template-columns: 1fr;
      margin-top: 0;
    }
    .carousel {
      img {
        max-width: 125px;
      }
      div {
        height: 123px;
      }
    }
  }
`;

const Home = () => {
  return (
    <StyledDiv>
      <h1>CELEBRITREE</h1>
      <div className="home__carousels">
        <HorizontalCarousel />
        <VerticalCarousel />
      </div>
      <Pagebreak margin="3rem 0 2rem" />
      <ArticleNavigation />
    </StyledDiv>
  );
};

export default Home;
