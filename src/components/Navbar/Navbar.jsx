import { Link } from "react-router-dom";
import styled from "styled-components";
import images from "../constants/images";
const StyledNav = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100vw;
  top: 0;
  transition: all 1s ease-in-out;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 9999;
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0;
    margin: 0.5rem 0;
    position: relative;
    a {
      text-decoration: none;
    }
    li {
      font-size: var(--fs-l);
      -webkit-text-fill-color: white;
      -webkit-background-clip: text;
      background-clip: text;
      cursor: pointer;
      position: relative;
      &::before,
      ::after {
        transition: all 1s ease;
        content: "";
        background-image: var(--nav-gradient);
        width: 0;
        height: 3px;
        position: absolute;
        bottom: 0;
      }
      &::before {
        left: 0;
      }
      &::after {
        right: 0;
      }
      &:hover {
        &::before,
        &::after {
          width: 50%;
        }
        -webkit-text-fill-color: transparent;
        background-image: var(--nav-gradient);
      }
    }
    img {
      width: 80px;
      aspect-ratio: 1/1;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <img src={images.logo} alt="logo" />
        <li>Articles</li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
