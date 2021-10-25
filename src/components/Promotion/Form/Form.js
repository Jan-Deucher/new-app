import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Form.css";
import axios from "axios";
import useApi from "../utils/useApi";
import { useEffect } from "react";
const initialValue = {
  title: " ",
  url: " ",
  imageUrl: " ",
  price: 0,
};
const PromotionForm = ({ id }) => {
  const [values, setValues] = useState(id ? null: initialValue);
  const history = useHistory();
  const [load] = useApi({
      url: `promotions/${id}`,
      method : "get",
      onCompleted: (response) => {
        setValues(response.data);
      }
  });
  console.log(id);

  const [save, saveInfo] = useApi({
      url : id ? `/promotions/${id}` : `/promotions`,
      method : id ? "put" : "post",
      data : values,
      onCompleted : (response) => {
        if (!response.error) {
          history.push("/");
        }
      }
  })
 
  useEffect(() => {
    if (id) {
      load();
    }
  }, [id]);

  function onChange(ev) {
    const { name, value } = ev.target;

    console.log(values);

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    save();
  }

  if (!values) {
    return<div>Carregando...</div>;
  }
  return (
    <div>
      <h1>Promo Show</h1>
      <h2>Nova Promoção</h2>
      <form onSubmit={onSubmit}>
        {/* dados do db.json */}
        {saveInfo.loading && <span>Salvando dados...</span>}
        <div className="promotion-form__group">
          <label htmlFor="title">Título</label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={onChange}
            value={values.title}
          />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="url">Link</label>
          <input
            id="url"
            name="url"
            type="text"
            onChange={onChange}
            value={values.url}
          />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="imageUrl">Imagem (URL)</label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="text"
            onChange={onChange}
            value={values.imageUrl}
          />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="price">Preço</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={onChange}
            value={values.price}
          />
        </div>

        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default PromotionForm;
 


