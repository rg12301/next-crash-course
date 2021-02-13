import { articles } from "../../../data";

const handler = ({ query: { id } }, res) => {
  const article = articles.filter(
    (article) => article.id === id
  );
  article.length > 0
    ? res.status(200).json(article)
    : res.status(404).json({
        message: `Article with id ${id} not found`,
      });
};

export default handler;
