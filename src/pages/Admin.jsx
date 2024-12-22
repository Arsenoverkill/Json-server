import React, { useState } from "react";
import "./Admin.css";
import { useProductContext } from "../Context/MainContext";
import { useNavigate } from "react-router-dom";

const ErrorMessage = ({ message }) => (
  <p className={`error ${message ? "visible" : ""}`}>{message}</p>
);

const Admin = () => {
  const { setProduct } = useProductContext();
  const navigate = useNavigate();

  const [values, setValues] = useState({ image: "", name: "", price: "" });
  const [errors, setErrors] = useState({ image: "", name: "", price: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) || "" : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const newErrors = {
      name: values.name.trim() ? "" : "Поле 'Name' не может быть пустым",
      price: values.price ? "" : "Поле 'Price' не может быть пустым",
      image: values.image.trim() ? "" : "Поле 'Image' не может быть пустым",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error)) return;

    setProduct(values);
    navigate("/");
  };

  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          {["name", "price", "image"].map((field) => (
            <div key={field} className="input-wrapper">
              <ErrorMessage message={errors[field]} />
              <input
                onChange={handleInput}
                placeholder={`${field[0].toUpperCase() + field.slice(1)}...`}
                type={field === "price" ? "number" : "text"}
                name={field}
                className="input"
              />
            </div>
          ))}

          <button onClick={handleSubmit} className="uiverse">
            <span className="tooltip">CREATE PRODUCT</span>
            <span>PRODUCT</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
