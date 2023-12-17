import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routes } from "./routes";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { TodosProvider } from "./hooks/useTodos";

const getRoutes = (routes) => {
  return routes.map((route, key) => {
    return <Route path={route.path} element={route.element} key={key} />
  })
}

function App() {
  return (
    <BrowserRouter>
      <TodosProvider>
        <Routes>
          <Route index element={<Navigate to="/myday" replace />} />
          {getRoutes(routes)}
        </Routes>
      </TodosProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
