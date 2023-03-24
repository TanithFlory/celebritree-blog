import styled from "styled-components";

const StyledDiv = styled.div`
  position: relative;
  .carousel {
    display: grid;
    justify-content: center;
    gap: 1rem;
    color: white;
    overflow-y: hidden;
    max-height: 423px;
    margin-top: 14px;
    position: relative;
    scroll-behavior: smooth;
    img {
      height: 125px;
      width: 200px;
    }
    h3 {
      margin: 10px 0 0;
    }
    & > div:last-child {
      margin-bottom: 1rem;
    }
    & > div {
      display: flex;
      div {
        text-align: center;
        p {
          margin: 0;
        }
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    content: "";
    height: 4px;
    width: 100%;
    background-color: white;
    z-index: 10;
    max-width: 530px;
    margin: auto;
    cursor: pointer;
    button {
      position: absolute;
    }
    .up,
    .down {
      background-color: black;
      border: none;
      padding: 2px;
      cursor: pointer;
      svg {
        transform: scale(2);
        fill: white;
      }
    }
    .up {
      top: -8px;
    }
    .down {
      bottom: -12px;
    }
    &:hover {
      background-color: green;
      svg {
        fill: green;
      }
    }
  }
`;

export default StyledDiv;
