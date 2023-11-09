import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Article from './Article'


const Detail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        const response = await axios.get(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
        setArticle(response.data);
      } catch (error) {
        console.error('Errore nel recupero dei dettagli dell\'articolo:', error);
      }
    };

    fetchArticleDetails();
  }, [id]);

  if (!article) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>Data di pubblicazione: {article.date}</p>
      <img src={article.imageUrl} alt={article.title} />
      {/* Aggiungi altri dettagli dell'articolo */}
    </div>
  );
};

export default Detail;
