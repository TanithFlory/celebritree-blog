import styled from "styled-components";

const SArticle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1rem;
  a {
    text-decoration: none;
  }
  .article__card {
    display: grid;
    grid-template-rows: 1fr 1fr;
    max-height: 400px;
    p {
      margin: 0;
    }
    img {
      height: 150px;
      width: 100%;
    }
    h4 {
      color: var(--clr-green);
      margin: 0;
    }
    & > div:nth-child(2) {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
  @media screen and (max-width: 912px) {
    grid-template-columns: repeat(2, 1fr);
    & > div {
      max-height: 500px;
      grid-template-rows: 30% 1fr;
    }
  }
`;

export default SArticle;
