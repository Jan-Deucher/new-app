import React from "react";
import PromotionCard from "../Card";
import "./List.css"

const PromotionList = ({ loading, promotions }) =>{
    if(loading) {
        return <div>Carregando...</div>
    }
    return (
        <div className="promotion-list">
            {promotions.map((promotion,index) =>(
                <PromotionCard promotion= {promotion} />
            ))}
        </div>
    )
}

export default PromotionList;