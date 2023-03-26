import styled from "styled-components";

const SArticlePreview = styled.div`
  margin: 7rem 10rem 0;

  h1 {
    font-size: var(--fs-xxl);
    margin: 0;
    background: var(--gradient-bl-or);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  h1,
  h4 {
    text-align: center;
  }
  .article__content {
    padding: 3rem;
    margin-top: 2rem;
    p {
      padding: 0 60px;
      font-size: var(--fs-l);
      font-weight: 100;
    }
    h4 {
      margin: 0 0 1rem;
    }
  }
  @media screen and (max-width: 1096px) {
    .article__content {
      padding: 0;
      p {
        padding: 0;
      }
    }
  }
  @media screen and (max-width: 912px) {
    margin: 7rem 1rem 0px;
    .article__content {
      padding: 0;
    }
    * {
      --fs-l: 1rem;
      --fs-xxl: 2rem;
    }
  }
`;

export default SArticlePreview;
