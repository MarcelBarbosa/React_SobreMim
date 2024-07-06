import Banner from "Componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao({ children }) {
    return (
        <main>
            <Banner />

            <Outlet /> 
            {children}
            {/* São as Rotas filhas:
                    Inicio
                    SobreMim    
            */}
        </main>
    )
}