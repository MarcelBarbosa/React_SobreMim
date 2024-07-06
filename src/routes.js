import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from './Paginas/Inicio';
import SobreMim from './Paginas/SobreMim';
import Menu from "./Componentes/Menu";
import Rodape from "Componentes/Rodape";
import PaginaPadrao from "Componentes/PaginaPadrao";
import Post from "Paginas/Post";
import NaoEncontrada from "Paginas/NaoEncontrada";
import ScrollToTop from "Componentes/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      {/* 
        Rotas aninhadas com Outlet (Rota Pai de outras Rotas) 
        Renderiza um layout padrão para as rotas filhas
      */}
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        {/* 
        Rota "/" renderida: 
        <PaginaPadrao>
        <Inicio />
        </PaginaPadrao>
        
        Rota "/sobremim" renderida: 
        <PaginaPadrao>
        <SobreMim />
        </PaginaPadrao>
        
        */}

        <Route path="posts/:id/*" element={<Post />}/>
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes; 
