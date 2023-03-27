import styled from "styled-components";
import images from "../constants/images";
import Newsletter from "./Newsletter";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
const SFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
  & > :nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      transform: scale(2);
      cursor: pointer;
      &:hover {
        fill: var(--clr-cyan);
      }
    }
    & > :nth-child(2) {
      display: flex;
      gap: 2rem;
    }
  }
  & > :last-child {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  img {
    width: 100px;
    aspect-ratio: 1/1;
  }
  a {
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <SFooter>
      <Newsletter />
      <div>
        <img src={images.logo} alt="logo" />
        <div>
          <AiFillInstagram />
          <AiFillFacebook />
          <AiFillTwitterSquare />
        </div>
      </div>
      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Credits</a>
      </div>
    </SFooter>
  );
};

export default Footer;
