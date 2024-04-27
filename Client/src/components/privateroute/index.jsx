// PrivateRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  // Verificar si el usuario está autenticado (puedes usar tu lógica aquí)
  const isAuthenticated = useSelector((state) => state.isAuthenticated); // Ejemplo: verifica si hay un token de autenticación

  return isAuthenticated ? element : <Navigate to="/" />;
};

export default PrivateRoute;
