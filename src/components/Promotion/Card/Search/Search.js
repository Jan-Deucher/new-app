import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PromotionList from "../List/List";
import "./Search.css";

const PromotionSearch = () => {
  const [promotions, setPromotions] = useState([]);
  const [search, setSearch] = useState(""); //busca

  useEffect(() => {
    const params = {};//busca
    if(search){
      params.title_like = search;
    }
    axios.get("http://localhost:5000/promotions?_embed=comments&_order=desc&_sort=id", {params})
      .then((response) => {
        setPromotions(response.data);
      });
  }, [search]);
  return (
    <div className="promotion-search">
      <header className="promotion-search__header">
        <h1 className="promotion-search__title">Promo Show</h1>
        <Link to="/create">Nova Promoção</Link>
      </header>
      <input type="search" className="promotion-search__input" 
      placeholder="Buscar"
      value={search} //busca
      onChange={(ev) =>setSearch(ev.target.value)} //busca
      />
      <PromotionList promotions = {promotions} loading={!promotions.length} />
    </div>
  );
};
export default PromotionSearch;
