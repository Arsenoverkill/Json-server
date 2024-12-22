import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { API } from "../API";

const productContext = createContext();
export const useProductContext = () => useContext(productContext);

const MainContext = ({ children }) => {
  const [keys, setKeys] = useState([]);
  async function setProduct(newObj) {
    await axios.post(API, newObj);
    readProduct();
  }
  async function readProduct() {
    const { data } = await axios(API);
    setKeys(data);
  }
  async function deletProduct(id) {
    await axios.delete(`${API}/${id}`);
    readProduct();
  }

 async function editProduct(id,newEdit) {
    await axios.patch(`${API}/${id}`,newEdit)
  }
  const values = {
    setProduct,
       readProduct,
    keys,
    deletProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default MainContext;
