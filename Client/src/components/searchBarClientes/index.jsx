import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./searchBarClientes.css";
import { filterCliente } from "../../redux/actions";
import { Button } from "../Mystyles";
import { Link } from "react-router-dom";

const SearchBar = ({ onFilter }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [ciudad, setCiudad] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    const queryParts = [];
    if (nombre) queryParts.push(`nombre=${formatInputValue(nombre)}`);
    if (apellido) queryParts.push(`apellido=${formatInputValue(apellido)}`);
    if (ciudad) queryParts.push(`ciudad=${formatInputValue(ciudad)}`);
    const queryString = queryParts.join("&");

    if (queryString) {
      onFilter(queryString);
      dispatch(filterCliente(queryString));
    } else {
      console.log("Por favor ingrese al menos un valor de búsqueda");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const formatInputValue = (value) => {
    if (!value) return "";
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  return (
    // <div className="flex gap-2 mb-4 ">
      <div className="searchbar">
        {/* <div className=""> */}
          <input
            placeholder="Nombre"
            type="text"
            value={nombre}
            onKeyDown={handleKeyDown}
            onChange={(e) => handleInputChange(e, setNombre)}
            className="input input-sm w-full max-w-40 !text-black"
          />
        {/* </div> */}

        {/* <div className=""> */}
          <input
            placeholder="Apellido"
            type="text"
            value={apellido}
            onKeyDown={handleKeyDown}
            onChange={(e) => handleInputChange(e, setApellido)}
            className="input input-sm w-full max-w-40 !text-black"
          />
        {/* </div> */}

        {/* <div className=""> */}
          <input
            placeholder="Ciudad"
            type="text"
            value={ciudad}
            onKeyDown={handleKeyDown}
            onChange={(e) => handleInputChange(e, setCiudad)}
            className="input input-sm w-full max-w-40 !text-black"
          />
        {/* </div> */}
        {/* <div className="flex items-center gap-2"> */}
          <Button onClick={handleSearch} className="buscar">
            Buscar
          </Button>
        {/* </div> */}
      </div>
    // </div>
  );
};

export default SearchBar;
