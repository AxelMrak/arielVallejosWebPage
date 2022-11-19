import { Routes, Route } from "react-router-dom";

export const MyRoutes = () => {
    return (
        <Routes>
            {/* HomePage */}
            <Route path="/" element={<HomePage />} />
            {/* TODO: Terapias */}
            <Route path="/terapias" element={<TerapiasPage />} />
            {/* Ubicacion y contacto */}
            <Route path="/contacto" element={<UbicacionPage />} />
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};