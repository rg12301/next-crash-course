import articleStyles from "../styles/article.module.css";
import Article from "./Article";

const ArticleList = ({ articles }) => {
  const articleList = articles.map((article) => (
    <Article article={article} key={article.id} />
  ));

  return (
    <div className={articleStyles.grid}>{articleList}</div>
  );
};

export default ArticleList;
