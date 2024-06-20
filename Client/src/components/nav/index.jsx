// import SearchBar from "../searchbar";
import { Link} from "react-router-dom";
import { Button } from "../Mystyles";

const Nav = ({logout }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        width: "300px",
        alignItems: "center",
        // backgroundColor:"red"
      }}
    >
      {/* <SearchBar onVerificarCliente={onVerificarCliente} /> */}
      
      <Link to="registrocliente/">
        <Button>Registro de Cliente</Button>
      </Link>
      {/* <Link to="cotizacion/">
        <Button>Cotizacion</Button>
      </Link> */}
      {/* <Link to="financiamiento/">
        <Button>Financiamiento</Button>
      </Link> */}
      {/* <Link to="/previsualizarcontrato" onVerificarCliente={onVerificarCliente}>
        <Button>Contrato</Button>
      </Link> */}
      {/* <Link to="/documentoslegales">
        <Button>Generar Documentos Legales</Button>
      </Link> */}
      <Link to="/agendarcitas">
        <Button>Agendar Citas</Button>
      </Link>
      <Link to="/configurarrecordatorios">
        <Button>Configurar Recordatorios</Button>
      </Link>
      <Link to="/conocimientodelitigios">
        <Button>Conocimiento de Litigios</Button>
      </Link>
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

