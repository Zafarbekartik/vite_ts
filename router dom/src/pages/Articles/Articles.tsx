import { UseFetch } from "../../hooks/UseFetch";
import { NavLink } from "react-router-dom";

function Articles() {
  const {
    data: articles,
    isPending,
    error,
  } = UseFetch("http://localhost:3000/articles");
  return (
    <div className="article-container">
      {isPending && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}

      {articles &&
        articles.map((article) => {
          return (
            <div className="card" key={article.id}>
              <h3>
                Title: <i>{article.title}</i>
              </h3>
              <p>
                Author: <i> {article.author}</i>
              </p>
              <NavLink to={`/articles/${article.id}`}>Read more</NavLink>
            </div>
          );
        })}
    </div>
  );
}

export default Articles;
