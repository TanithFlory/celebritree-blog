import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import SArticlePreview from "./ArticlePreview.styles";
import Introduction from "./Introduction";
import Pagebreak from "../../UI/Pagebreak";
import ArticleHighlights from "./ArticleHighlights";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const ArticlePreview = () => {
  const { title } = useParams();
  const [article, setArticle] = useState();
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      const response = await axios({
        method: "GET",
        url: "http://localhost:3001/posts/article-preview",
        params: {
          title: title?.replace(/[-]+/g, " "),
        },
        signal: controller.signal,
      });
      const sanitizedArticle = DOMPurify.sanitize(response.data.content);
      setArticle(sanitizedArticle);
    })();

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <SArticlePreview>
      <div>img</div>
      <div>
        <ArticleHighlights />
        <div className="article__content">
          {parse(article === undefined ? " " : article)}
          <Pagebreak />
        </div>
        <Introduction />
        <Pagebreak margin="3rem 0"/>
      </div>
    </SArticlePreview>
  );
};

export default ArticlePreview;
