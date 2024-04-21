import {useSelector, useDispatch } from "react-redux";
// import Card from "../card";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = () => {

  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();
  
  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(orderCards(e.target.value));
    
  };
  
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  }
  
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <>
      <div className="favorites">
        <select onChange={handleOrder}>
          <option value="b">Escoge el orden</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female"> Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className="favorites">

        {myFavorites.map((character) => {
            // return (
            //   <Card
            //   key={character.id}
            //   character={character}
            //   />
            //  )
            }
          )
        }
      </div>
    </>
  ); 
}

export default Favorites