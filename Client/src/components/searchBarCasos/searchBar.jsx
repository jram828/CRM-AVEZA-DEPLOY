import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { filterCasos } from '../../redux/actions';
import { Button } from '../Mystyles';


const SearchBar = ({ onFilter }) => {
  const [tipoCaso, setTipoCaso] = useState('');
  const [apellidoAbogado, setApellidoAbogado] = useState('');
  const [apellidoCliente, setApellidoCliente] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e, setValue) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    const queryParts = [];
    if (tipoCaso) queryParts.push(`tipoCaso=${formatInputValue(tipoCaso)}`);
    if (apellidoAbogado) queryParts.push(`apellidoAbogado=${formatInputValue(apellidoAbogado)}`);
    if (apellidoCliente) queryParts.push(`apellidoCliente=${formatInputValue(apellidoCliente)}`);
    const queryString = queryParts.join('&');

    if (queryString) {
      onFilter(queryString);
      dispatch(filterCasos(queryString));
    } else {
      console.log('Por favor ingrese al menos un valor de búsqueda');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const formatInputValue = (value) => {
    if (!value) return '';
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  return (
    <div className="searchbar">
  <div className="flex flex-col gap-2 items-start max-w-full">
    <div className="w-40">
      <input
        placeholder="Tipo de caso"
        type="text"
        value={tipoCaso}
        onKeyDown={handleKeyDown}
        onChange={(e) => handleInputChange(e, setTipoCaso)}
        className="input input-sm w-full max-w-40 !text-black"
      />
    </div>
  </div>

  <div className="flex flex-col gap-2 items-start max-w-full">
    <div className="w-40">
      <input
        placeholder="Apellido abogado"
        type="text"
        value={apellidoAbogado}
        onKeyDown={handleKeyDown}
        onChange={(e) => handleInputChange(e, setApellidoAbogado)}
        className="input input-sm w-full max-w-40 !text-black"
      />
    </div>
  </div>

  <div className="flex flex-col gap-2 items-start max-w-full">
    <div className="w-40">
      <input
        placeholder="Apellido cliente"
        type="text"
        value={apellidoCliente}
        onKeyDown={handleKeyDown}
        onChange={(e) => handleInputChange(e, setApellidoCliente)}
        className="input input-sm w-full max-w-40 !text-black"
      />
    </div>
  </div>

  <div className="flex items-center gap-2">
    <Button onClick={handleSearch} className="btn btn-sm w-40 border border-accent bg-white hover:bg-white">
      Buscar
      <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
        <path fill="black" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"></path>
      </svg>
    </Button>
  </div>
</div>

  );
};

export default SearchBar