import { Route, Routes } from "react-router-dom";
import { guardarInscripciones } from "./utils/persistencia";
import Inicio from "./pages/Inicio";
import Actividades from "./pages/Actividades";
import DetalleActividad from "./pages/DetalleActividad";
import AdminActividades from "./pages/admin/AdminActividades";
import NoEncontrada from "./pages/NoEncontrada";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <>
      <Navegacion />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/actividades" element={<Actividades />} />
          <Route path="/actividades/:id" element={<DetalleActividad />} />
          <Route path="/admin/actividades" element={<AdminActividades />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
    </>
  );
}

useEffect(() => {
  guardarInscripciones(inscripciones);
}, [inscripciones]);

export default App;
