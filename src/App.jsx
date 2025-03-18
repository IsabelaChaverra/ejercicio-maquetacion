import BarraSuperior from "./components/barra-superior/BarraSuperior";
import SeccionPrincipal from "./components/seccion-principal/SeccionPrincipal";
import SeccionLateral from "./components/seccion-lateral/SeccionLateral";
import SeccionInferior from "./components/seccion-inferior/SeccionInferior";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <BarraSuperior />
      <div className="contenido">
        <SeccionPrincipal />
        <div className="lateral">
          <SeccionLateral />
          <SeccionLateral />
          <div className="inferior">
            <SeccionInferior />
            <SeccionInferior />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
