import './tarjetaCaso.css'
import { Link } from 'react-router-dom';
// import picture from "../../assets/case-file.png"


function TarjetaCaso({caso}) {

  const { 
    id,
    tipoCaso,
    nombresabogado, 
    apellidosAbogado,
    nombreCliente,
    apellidoCliente,
     } = caso;


   
    console.log('item', caso)
     

  return (
    <div className="contenedortarjetacaso">
      {/* <div className="avatar flex justify-center mt-4">
      <img src={picture} alt="Profile Picture" className="rounded-full !w-28 !h-28 border-2 border-secondary" />
    </div> */}
      <div className="contenedorinfocasotarjeta">
        <div className="infocasotarjeta">
          <span className="labelcaso">Tipo de caso: </span>
          <span className="nombrecaso">{tipoCaso}</span>
        </div>
        <div className="infocasotarjeta">
          <span className="labelcaso">Abogado: </span>
          <span className="nombrecaso">
            {nombresabogado} {apellidosAbogado}
          </span>
        </div>
        <Link to={`${id}`} className="link">
          <div className="infocasotarjeta">
            <span className="labelcaso">Cliente: </span>
            <span className="nombrecaso">
              {apellidoCliente} {nombreCliente}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}


export default TarjetaCaso