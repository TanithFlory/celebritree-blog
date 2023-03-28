import { useRef } from "react";
import styled from "styled-components";
import images from "../constants/images";
import Newsletter from "./Newsletter";
import {
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { motion, useInView } from "framer-motion";
const SFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin: 1rem;
  min-height: 200px;
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
  const ref = useRef();
  const visible = useInView(ref, {
    margin: "200px",
    once: true,
  });
  const stagger = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
        delay: 1.3,
      },
    },
  };
  const transition = { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.9] };
  const staggerAnimation = {
    initial: {
      x: 50,
    },
    animate: {
      x: 0,
      transition: { duration: 0.5, ...transition, delay: 1.3 },
    },
  };
  return (
    <SFooter ref={ref}>
      {visible && (
        <>
          <Newsletter />
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", delay: 0.5, duration: 0.5 }}
            initial={{ opacity: 0 }}
          >
            <img src={images.logo} alt="logo" />
            <motion.div variants={stagger} animate="animate" initial="initial">
              <motion.div variants={staggerAnimation}>
                <AiFillInstagram />
              </motion.div>
              <motion.div variants={staggerAnimation}>
                <AiFillFacebook />
              </motion.div>
              <motion.div variants={staggerAnimation}>
                <AiFillTwitterSquare />
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", delay: 0.5, duration: 0.5 }}
            initial={{ opacity: 0 }}
          >
            <a href="#">Privacy Policy</a>
            <a href="#">Credits</a>
          </motion.div>
        </>
      )}
    </SFooter>
  );
};

export default Footer;
