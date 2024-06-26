//Importar modulos necesarios
import { useState, useEffect } from "react";
import "./App.css";
// import Cards from "./components/cards";
import Nav from "./components/nav";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Outlet,
} from "react-router-dom";
import PrevisualizarContrato from "./components/previsualizarcontrato";
import Detail from "./components/detail";
import Form from "./components/login";
import GenerarFactura from "./components/generarfactura";
import DocumentosLegales from "./components/documentoslegales";
import Cotizacion from "./components/cotizacion";
import Clientes from "./components/clientes";
import Contrato from "./components/contrato";
import ConfigurarRecordatorios from "./components/configurarrecordatorios";
import AgendarCitas from "./components/agendarcitas";
import Financiamiento from "./components/financiamiento";
import RegistroCliente from "./components/registrocliente";
import CrearUsuario from "./components/crearusuario";
import RecordatorioContrasena from "./components/recordatoriocontrasena";
import axios from "axios";
import logo from "./img/logoAveza.png";
import PDF from "./components/PDF";
import LitigiosPorCliente from "./components/litigiosporcliente";
import Autorizacion from "./components/autorizacion";
import Insolvencia from "./components/insolvencia";
import Poder from "./components/poder";
import { codigoPaises } from "./utils/codigoPaises.js";
import { codigoCiudades } from "./utils/codigoCiudades.js";
import { codigoDepartamentos } from "./utils/codigoDepartamentos.js";
import WordToHtml from "./components/wordtohtml";
import { PrivateRoute } from "./components/privateroute";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "./redux/actions";
import Abogados from "./components/abogados/index.jsx";
import RegistroAbogado from "./components/registroabogado/index.jsx";
import Casos from "./components/casos/index.jsx";
import DetailCasos from "./components/detailCasos/detailCasos.jsx";
import CrearCaso from "./components/CrearCaso/crearCaso.jsx";
import Consultas from "./components/consultas/consultas.jsx";
import AllConsultas from "./components/allConsultas/allConsultas.jsx";
import Payments from "./components/payments/payments.component.jsx";
// export const URL = "http://localhost:3001/crmAveza/";

// const URL = import.meta.env.VITE_URL;
const { URL } = process.env;
// axios.defaults.baseURL = "https://crm-aveza-postgre.onrender.com/crmAveza";

axios.defaults.baseURL = "http://localhost:3001/crmAveza";
function App() {
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  // useEffect(() => {
  //   !access && navigate("/");
  // }, []);

  //Funcion para verificar datos de ingreso
  async function login(userData) {
    const { cedula, password, rol } = userData;
    const URL = "/login";
    console.log("Datos login:", { cedula, password, rol });
    try {
      const { data } = await axios(
        URL + `?cedula=${cedula}&password=${password}`
      );
      console.log("Login propio:", data);
      const { access } = data;
      console.log("Access: ", access);
      //  setAccess(access);
      // dispatch(setAuth(access));
      // navigate("/home");
      window.localStorage.setItem("loggedUser", JSON.stringify(data.usuario));
      if (access === true) {
        dispatch(setAuth(access));

        if (data.usuario.administrador || data.usuario.cedulaAbogado) {
          navigate("/clientes");
        } else if (data.usuario.cedulaCliente) {
          navigate("/casos");
        } else {
          navigate("/home");
        }
      } else {
        window.alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      window.alert("Usuario o contraseña incorrectos");
    }
  }

  async function crearUsuario(userDataCrear) {
    const {
      email,
      password,
      nombres,
      apellidos,
      cedula,
      celular,
      direccion,
      nombre_ciudad,
      tipo_usuario,
    } = userDataCrear;
    console.log("Userdata: ", userDataCrear);
    const ciudad = codigoCiudades.filter(
      (ciudad) => ciudad.nombre_ciudad === nombre_ciudad.toUpperCase()
    );

    console.log("Codigo ciudad Userdata: ", ciudad);
    // const URL = "/crearusuario";
    try {
      await axios.post("/usuarios", {
        email: `${email}`,
        password: `${password}`,
        nombres: `${nombres}`,
        apellidos: `${apellidos}`,
        cedula: `${cedula}`,
        celular: `${celular}`,
        direccion: `${direccion}`,
        nombre_ciudad: [`${ciudad[0].codigo_ciudad}`],
        tipo_usuario: `${tipo_usuario}`,
      });
      window.alert("Usuario creado con éxito.");
      setAccess(false);
      access && navigate("/");
    } catch (error) {
      window.alert("No fue posible crear el usuario.");
    }
  }

  async function registroCliente(userDataRegistro) {
    const {
      email,
      nombres,
      apellidos,
      cedulaCliente,
      celular,
      direccion,
      nombre_ciudad,
      tipo_usuario,
      tipo_de_caso,
      forma_de_pago,
      honorarios,
      cuotas,
      comentarios,
      valor_pretensiones,
    } = userDataRegistro;

    console.log("User data registro:", userDataRegistro);

    const URL = "/clientes/registrocliente";
    try {
      await axios.post(URL, {
        email: `${email}`,
        // password: `${password}`,
        nombres: `${nombres}`,
        apellidos: `${apellidos}`,
        cedulaCliente: `${cedulaCliente}`,
        celular: `${celular}`,
        direccion: `${direccion}`,
        nombre_ciudad: `${nombre_ciudad}`,
        tipo_usuario: `${tipo_usuario}`,
        tipo_de_caso: `${tipo_de_caso}`,
        forma_de_pago: `${forma_de_pago}`,
        honorarios: `${honorarios}`,
        cuotas: `${cuotas}`,
        comentarios: `${comentarios}`,
        valor_pretensiones: `${valor_pretensiones}`,
      });
      window.alert("Se ha registrado el cliente con éxito.");
      setAccess(true);
      access && navigate("/home/litigiosporcliente");
    } catch (error) {
      window.alert("No fue posible registrar el cliente.");
    }
  }

  async function registroAbogado(userDataRegistro) {
    const {
      email,
      nombres,
      apellidos,
      cedulaAbogado,
      celular,
      direccion,
      nombre_ciudad,
      tarjetaProf,
      password,
    } = userDataRegistro;

    console.log("User data registro:", userDataRegistro);

    const URL = "/abogados";
    try {
      await axios.post(URL, {
        email: `${email}`,
        // password: `${password}`,
        nombres: `${nombres}`,
        apellidos: `${apellidos}`,
        cedulaAbogado: `${cedulaAbogado}`,
        celular: `${celular}`,
        direccion: `${direccion}`,
        nombre_ciudad: `${nombre_ciudad}`,
        tarjetaProf: `${tarjetaProf}`,
        password: `${password}`,
      });
      window.alert("Se ha registrado el cliente con éxito.");
      setAccess(true);
      access && navigate("/abogados");
    } catch (error) {
      window.alert("No fue posible registrar el cliente.");
    }
  }

  const logout = () => {
     window.localStorage.setItem("loggedUser", JSON.stringify({}));
    alert("Ha salido exitosamente");
    setAccess(false);
    navigate("/");
  };

  const sendSMS = () => {
    // setAccess(false);
    navigate("/sms");
  };



  const relacionarPaises = async () => {
    try {
      await axios.post("/relacionarpaises", {
        codigoPaises,
        codigoCiudades,
        codigoDepartamentos,
      });
      // console.log("Data verificar clientes:", data);
    } catch (error) {
      console.log(error.message);
      window.alert("Paises NO encontrados!");
    }
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFilter);
  };

  //Acceder al modulo de crear usuario
  const clickHandlerCrear = (e) => {
    e.preventDefault();
    setAccess(true);
    navigate("/crearusuario");
  };


  //Acceder al modulo de recordar contraseñas
  const clickHandlerRecordatorio = (e) => {
    e.preventDefault();
    setAccess(true);

    navigate("/recordatoriocontrasena");
  };

  return (
    //Renderizar menu principal en las rutas correspondientes
    <div className="App">
      {location.pathname !== "/" &&
      location.pathname !== "/crearusuario" &&
      location.pathname !== "/recordatoriocontrasena" &&
      location.pathname !== "/consultas" ? (
        <Nav logout={logout} />
      ) : undefined}

      {location.pathname === "/home" ? (
        <div className="logo-aveza2">
          <br></br>
          <br></br>
          <br></br>
          <img src={logo} alt="logo-aveza" title="AVEZA SAS" />
          <br></br>
          <br></br>
          <br></br>
          <h1 className="titulo">Bienvenido a CRM AVEZA</h1>
        </div>
      ) : undefined}

      <Routes>
        <Route
          path="/"
          element={
            <Form
              login={login}
              clickHandlerRecordatorio={clickHandlerRecordatorio}
              clickHandlerCrear={clickHandlerCrear}
            />
          }
        />
        <Route
          path="/crearusuario"
          element={<CrearUsuario crearUsuario={crearUsuario} />}
        />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="generar" element={<WordToHtml />} />
        <Route path="generarfactura" element={<GenerarFactura />} />
        <Route path="cotizacion" element={<Cotizacion />} />
        <Route path="autorizacion" element={<Autorizacion />} />
        <Route path="poder" element={<Poder />} />
        <Route path="PDF" element={<PDF />} />
        <Route path="insolvencia" element={<Insolvencia />} />
        <Route
          path="registrocliente"
          element={<RegistroCliente registroCliente={registroCliente} />}
        />
        <Route
          path="registroabogado"
          element={<RegistroAbogado registroAbogado={registroAbogado} />}
        />
        <Route path="detail" element={<Detail />} />
        <Route
          path="previsualizarcontrato"
          element={<PrevisualizarContrato />}
        />
        <Route
          path="configurarrecordatorios"
          element={<ConfigurarRecordatorios />}
        />
        <Route path="agendarcitas" element={<AgendarCitas />} />
        <Route
          path="/recordatoriocontrasena"
          element={<RecordatorioContrasena />}
        />
        <Route path="documentoslegales" element={<DocumentosLegales />} />
        <Route path="contrato" element={<Contrato />} />
        <Route path="litigiosporcliente" element={<LitigiosPorCliente />} />
        <Route path="clientes" element={<Clientes />} />
        <Route path="casos" element={<Casos />} />
        <Route path="casos/:id" element={<DetailCasos />} />
        <Route path="casos/crearcaso" element={<CrearCaso />} />
        <Route path="abogados" element={<Abogados />} />
        <Route path="verconsultas" element={<AllConsultas />} />
        <Route path="pagos" element={<Payments />} />
      </Routes>
    </div>
  );
}

function LayoutWithNav() {
  return (
    <div className="home">
      {/* Barra de navegación a la izquierda */}
      {/* <Home className="home" /> */}

      {/* Contenedor principal del contenido a la derecha */}
      <div className="contenedor-derecha">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
