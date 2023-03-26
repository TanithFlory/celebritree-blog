import { useState } from "react";
import styled from "styled-components";
import ArticleList from "../ArticleList/ArticleList";
import { MdOutlineFiberNew, MdTrendingUp } from "react-icons/md";
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
  const [list, setList] = useState("latest");
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
      <ArticleList list={list} />
    </SNavigation>
  );
};

export default ArticleNavigation;
