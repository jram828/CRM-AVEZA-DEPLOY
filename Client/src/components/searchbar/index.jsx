import { Button, ContainerNav, Input } from "../Mystyles";
import { useState } from "react";

const SearchBar = (props) => {
  const [id, setId] = useState('');
  const handleClick = () => {
    props.onSearch(id);
  };
  const handleChange = (e ) => {
    setId(e.target.value);
  };
  return (
    <ContainerNav>
      <Input
        value={id}
        onChange={handleChange}
        type="search"
        name="personaje"
        placeholder="ID.."
      />
      <Button onClick={handleClick}>Agregar</Button>
    </ContainerNav>
  );
};

export default SearchBar;
