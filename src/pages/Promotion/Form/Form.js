import React from "react";
import { useParams } from "react-router-dom";
import PromotionForm from "components/Promotion/Form/Form";
import UIContainer from "components/Promotion/Card/UI/Container/Container";

const PagesPromotionForm = () => {
  const { id } = useParams();
  return (
    <div>
      <UIContainer>
        <PromotionForm id = {id ? Number.parseInt(id,10): null} />   
      </UIContainer>
    </div>
  );
};

export default PagesPromotionForm;
