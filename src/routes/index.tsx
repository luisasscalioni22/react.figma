import { Routes, Route } from "react-router-dom";
import {
  AdmLegendaPage,
  AdmLegendaStorePage,
  CadastrarPage,
  HomePage,
  LayoutPage,
  LoginPage
} from "pages";
import ProtectedRoute from "./ProtectedRoute";
const Rotas = () => {
  return (
    <Routes>
      <Route element={<LayoutPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastrar" element={<CadastrarPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/legenda" element={<AdmLegendaPage />} />
        <Route path="/legenda/:id" element={<AdmLegendaStorePage />} />
        <Route path="/adm" element={<ProtectedRoute />}>
        </Route>
      </Route>
    </Routes>
  );
};

export default Rotas;