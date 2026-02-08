import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "@/pages/Login";
// depois você vai adicionar Dashboard aqui

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/login" element={<Login />} />

        {/* Futuras rotas protegidas */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
