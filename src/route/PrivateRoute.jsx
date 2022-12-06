import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "../page/ProductDetail";

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />; //제품 썸네일 누르면 로그인페이지로
};

export default PrivateRoute;
