import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { addFav, clienteActual, getClienteByCedula, removeFav } from "../../redux/actions";
import { useState, useEffect} from "react";
import { numeroALetras } from "../convertiraletras";
import { useNavigate } from "react-router-dom";

const Cliente = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const cliente = useSelector((state) => state.cliente);
  const {
    cedula,
    email,
    TipoUsuarios,
    TipoDeCasos,
    nombres,
    apellidos,
    direccion,
    codigo_ciudad,
    celular,
    honorarios,
    valor_pretensiones,
    aceptacion_cotizacion,
    Ciudads,
    comentarios,
    forma_de_pago,
    tiene_contrato
  } = props.cliente;

 const newCliente = {
   cedula: Number(cedula).toLocaleString(),
   email,
   tipo_usuario: TipoUsuarios[0].descripcion,
   tipo_caso: TipoDeCasos[0].descripcion,
   nombres,
   apellidos,
   direccion,
   codigo_ciudad,
   celular,
   valor_pretensiones_letras: numeroALetras(Number(valor_pretensiones)),
   valor_pretensiones: Number(valor_pretensiones).toLocaleString(),
   honorarios_letras: numeroALetras(Number(honorarios)),
   honorarios: Number(honorarios).toLocaleString(),
   aceptacion_cotizacion,
   Ciudads,
   comentarios,
   forma_de_pago,
   tiene_contrato,
 }; 


  // const { addFav, removeFav } = props;

  // const [isFav, setIsFav] = useState(false);

  // const handleFavorite = () => {
    // if (isFav === false) {
    //   setIsFav(true);
    //   addFav(props.cliente);
    // } else if (isFav === true) {
    //   setIsFav(false);
    //   removeFav(props.cliente.cedula);
    // }
  // };

  const onClickDetail = () => {
    dispatch(clienteActual(newCliente));
    navigate("/detail");
  };
  // useEffect(() => {
  //   props.myFavorites.forEach((fav) => {
  //     if (fav.id === props.cliente.cedula) {
  //       setIsFav(true);
  //     }
  //   });
  // }, [props.myFavorites, props.cliente.cedula]);

  return (
    <div className="container">
      <div className="card" key={cedula}>
        <a className="linkdetailcliente" onClick={onClickDetail}>
          <h1
            style={{
              backgroundColor: "white",
              fontSize: 16,
            }}
          >
            {" "}
            {nombres.toUpperCase()} {apellidos.toUpperCase()}
          </h1>
        </a>
      </div>
    </div>
  );
};

  var mapStateToProps = (state) => {
    return { myFavorites: state.myFavorites };
  };

export default connect(mapStateToProps, {addFav,removeFav})(Cliente);
