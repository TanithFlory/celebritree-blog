import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArticleList from "../ArticleList/ArticleList";
import { MdOutlineFiberNew, MdTrendingUp } from "react-icons/md";
import { motion, useAnimation, useInView } from "framer-motion";

const SNavigation = styled.div`
  margin-top: 10px;
  & > div:first-child {
    display: flex;
    gap: 1rem;
    list-style: none;
    a {
      display: flex;
      gap: 5px;
      align-items: center;
      font-size: var(--fs-m);
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
    }
    a:hover,
    .active {
      background-color: var(--clr-white);
      color: var(--clr-black);
      svg {
        fill: var(--clr-black);
      }
    }
  }
`;

const ArticleNavigation = () => {
  const controls = useAnimation();
  const [list, setList] = useState("latest");
  const ref = useRef();
  const visible = useInView(ref, {
    margin: "-160px",
    once: true,
  });
  
  useEffect(() => {
    if (visible) {
      controls.start({
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 0.9,
        },
      });
    }
    return () => {
      if (ref.current) {
        controls.set({
          opacity: 0,
        });
      }
    };
  }, [controls, list, visible]);
  return (
    <SNavigation>
      <div>
        <a
          onClick={() => setList("latest")}
          className={`${list === "latest" ? "active" : undefined}`}
        >
          <MdOutlineFiberNew />
          Latest
        </a>
        <div />
        <a
          onClick={() => setList("trending")}
          className={`${list === "trending" ? "active" : undefined}`}
        >
          <MdTrendingUp />
          Trending
        </a>
      </div>
      <motion.div
        id="articleList"
        animate={controls}
        ref={ref}
        initial={{ opacity: 0 }}
      >
        <ArticleList list={list} />
      </motion.div>
    </SNavigation>
  );
};

export default ArticleNavigation;
