import React, { useEffect, useState } from "react";
import useApi from "components/Promotion/utils/useApi";
import axios from "axios";
import { Link } from "react-router-dom";
import PromotionList from "../List/List";
import "./Search.css";

const PromotionSearch = () => {
  
  const [search, setSearch] = useState(""); //busca
 
  const [load, loadInfo] = useApi({
    url:`/promotions`,
    method:"get",
    params:{
      _embed: "comments",
      _order: "desc",
      _sort: "id",
      title_like : search || undefined,
    },
  });
  
console.log(loadInfo.data);

  useEffect(() => {
    load();
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
      <PromotionList 
      promotions = {loadInfo.data} 
      loading={loadInfo.loading} 
     error = {loadInfo.loading} 
      />
    </div>
  );
};
export default PromotionSearch;
