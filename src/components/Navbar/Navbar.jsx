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
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0;
    margin: 0.5rem 0;
    li {
      font-size: var(--fs-l);
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
        <li>Home</li>
        <li>
          <img src={images.logo} alt="logo" />
        </li>
        <li>Articles</li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;
