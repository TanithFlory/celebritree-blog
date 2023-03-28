import { Link } from "react-router-dom";
import images from "../constants/images";
import SNav from "./Navbar.styles";
import { motion } from "framer-motion";

const Navbar = () => {
  const topDown = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeIn",
        duration: 0.6,
      },
    },
  };

  return (
    <SNav>
      <motion.ul animate="animate" initial="initial" variants={topDown}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <img src={images.logo} alt="logo" />
        <li>Articles</li>
      </motion.ul>
    </SNav>
  );
};

export default Navbar;
