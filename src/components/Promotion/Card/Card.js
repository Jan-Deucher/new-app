import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
const PromotionCard = ({ promotion }) => (
  <div className="promotion-card">
    <img src={promotion.imageUrl} className="promotion-card__image" alt="imagem da promoção"/>
    <div className="promotion-card__info">
      <h1 className="promotion-card__title">{promotion.title}</h1>
      <span className="promotion-card__price">R$ {promotion.price}</span>
      <footer className="promotion-card__footer">
        {promotion.comments.length > 0 && (
          <div className = "promotion-card__comment" >"{promotion.comments[0].comment}"</div>
        )}
        <div className="promotion-card__comments-count">
          {promotion.comments.length} Comentário{promotion.comments.length > 1 ? "s" : ""} 
        </div>
        <a
          href={promotion.url}
          target="_blank"
          className="promotion-card__link">
          IR PARA O SITE
        </a>
        <Link to = {`/edit/${promotion.id}`}>Editar
        
        </Link>
      </footer>
    </div>
  </div>
);

export default PromotionCard;
