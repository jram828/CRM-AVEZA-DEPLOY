//Importar modulos necesarios
import { useState, useEffect } from "react";
import "./App.css";
// import Cards from "./components/cards";
import Nav from "./components/nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import PrevisualizarContrato from "./components/previsualizarcontrato";
import Detail from "./components/detail";
import Form from "./components/login";
import Favorites from "./components/favorites";
import GenerarFactura from "./components/generarfactura";
import DocumentosLegales from "./components/documentoslegales";
import Cotizacion from "./components/cotizacion";
import ConocimientoDeLitigios from "./components/conocimientodelitigios";
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
import { codigoPaises } from "./utils/codigoPaises";
import { codigoCiudades } from "./utils/codigoCiudades";
import { codigoDepartamentos } from "./utils/codigoDepartamentos";
import WordToHtml from "./components/wordtohtml";

// export const URL = "http://localhost:3001/crmAveza/";

// const URL = import.meta.env.VITE_URL;
const { URL } = process.env;
axios.defaults.baseURL = "https://crm-aveza-postgre.onrender.com/crmAveza";

function App() {

  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect(() => {
  //   !access && navigate("/");
  // }, [access, navigate]);

  //Funcion para verificar datos de ingreso
  async function login() {
    // const { cedula, password } = userData;
    // const URL = "/login";
    // console.log("Datos login:", { cedula, password });
    try {
      // const { data } = await axios(
      //   URL + `?cedula=${cedula}&password=${password}`
      // );
      // console.log("Login 2:", data);
      // const { access } = data;
      // setAccess(true);

      // access &&
        navigate("/home");
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

    const ciudad = codigoCiudades.filter((ciudad) => ciudad.nombre_ciudad === nombre_ciudad.toUpperCase());

    console.log('Codigo ciudad Userdata: ', ciudad[0].codigo_ciudad)
    // const URL = "/crearusuario";
    try {
      await axios.post("/crearusuario", {
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
        cedula,
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

   console.log('User data registro:', userDataRegistro)

      const URL = "/registrocliente";
      try {
        await axios.post(URL, {
          email: `${email}`,
          // password: `${password}`,
          nombres: `${nombres}`,
          apellidos: `${apellidos}`,
          cedula: `${cedula}`,
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
        access && navigate("/litigiosporcliente");
      } catch (error) {
        window.alert("No fue posible registrar el cliente.");
      }
    }

  const logout = () => {
    alert("Ha salido exitosamente");
    setAccess(false);
    navigate("/");
  };

  const sendSMS = () => {
    // alert("Ha salido exitosamente");
    // setAccess(false);
    navigate("/sms");
  };

  //Funcion para obtener datos de un cliente

  const relacionarPaises =async () => {

    try {
      await axios.post('/relacionarpaises', {codigoPaises, codigoCiudades,codigoDepartamentos});
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

    // const clickHandlerDocumentos = (e) => {
    //   e.preventDefault();
    //   setAccess(true);
    //   navigate("/crearusuario");
    // };
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
      location.pathname !== "/recordatoriocontrasena" ? (
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
        <Route path="/" element={ <Form login={login}
              clickHandlerRecordatorio={clickHandlerRecordatorio}
          clickHandlerCrear={clickHandlerCrear} />} />
        <Route path="/generarfactura" element={<WordToHtml />} />
        <Route path="/generar" element={<GenerarFactura />} />
        <Route path="/crearusuario" element={<CrearUsuario crearUsuario={crearUsuario} />}/>
        <Route path="/cotizacion" element={<Cotizacion />} />
        <Route path="/autorizacion" element={<Autorizacion />} />
        <Route path="/poder" element={<Poder />} />
        <Route path="/PDF" element={<PDF />} />
        <Route path="/insolvencia" element={<Insolvencia />} />
        <Route path="/registrocliente" element={<RegistroCliente
          registroCliente={registroCliente} />}/>
        <Route path="/detail" element={<Detail />} />
        <Route path="/previsualizarcontrato" element={<PrevisualizarContrato />}/>
        <Route path="/configurarrecordatorios" element={<ConfigurarRecordatorios />}/>
        <Route path="/agendarcitas" element={<AgendarCitas />} />
        <Route path="/recordatoriocontrasena" element={<RecordatorioContrasena />}/>
        <Route path="/documentoslegales" element={<DocumentosLegales />} />
        <Route path="/contrato" element={<Contrato />} />
        <Route path="/previsualizarcontrato" element={<PrevisualizarContrato />}/>
        <Route path="/litigiosporcliente" element={<LitigiosPorCliente />} />
        <Route path="/conocimientodelitigios" element={<ConocimientoDeLitigios />}/>
      </Routes>

    </div>
  );
}
export default App;
