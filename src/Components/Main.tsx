import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Article from './Article'



const Main: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles');
        setArticles(response.data);
      } catch (error) {
        console.error('Errore nel recupero degli articoli:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Spaceflight News</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
