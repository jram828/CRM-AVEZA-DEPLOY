// import SearchBar from "../searchbar";
import { Link} from "react-router-dom";
import { Button } from "../Mystyles";
import logo from "../../img/logoAveza.png";
import "./nav.css";

const Nav = ({logout }) => {
  return (
    <div className="navbar">
      {/* <SearchBar onVerificarCliente={onVerificarCliente} /> */}
      <div className="logo-aveza">
        <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
      </div>
      <br />
      <br />
      <br />
      <Link to="/abogados">
        <Button>Abogados</Button>
      </Link>
      <Link to="/conocimientodelitigios">
        <Button>Conocimiento de Litigios</Button>
      </Link>
      {/* <Link to="cotizacion/">
        <Button>Cotizacion</Button>
      </Link> */}
      {/* <Link to="financiamiento/">
        <Button>Financiamiento</Button>
      </Link> */}

      <Link to="/agendarcitas">
        <Button>Agenda</Button>
      </Link>
      <Link to="/pagos">
        <Button>Pagos</Button>
      </Link>
      <Link to="/consultas">
        <Button>Consultas</Button>
      </Link>
      {/* <Link to="/configurarrecordatorios">
        <Button>Configurar Recordatorios</Button>
      </Link> */}
      {/* <Link to="/generarfactura">
        <Button>Generar Factura</Button>
      </Link> */}
      <Link to="/" onClick={logout}>
        <Button>Cerrar Sesión</Button>
      </Link>
    </div>
  );
};

export default Nav;

