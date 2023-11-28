import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "../containers/errors/Error404";
import Home from "../containers/pages/Home";
import Casos from "../containers/pages/Casos";
import Servicios from "../containers/pages/Servicios";
import Nosotros from "../containers/pages/Nosotros";
import Carreras from "../containers/pages/Carreras";
import Blog from "../containers/pages/Blog";
import Contacto from "../containers/pages/Contacto";
import Consulta from "../containers/pages/Consulta";

import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Counter } from "./Counter";
import { Form } from "./Form";
const MyApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/casos" element={<Casos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/carreras" element={<Carreras />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="*" element={<Error404 />} />

          <Route path="/counterOne" element={<Counter />} />
          <Route path="/counterTwo" element={<Counter />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default MyApp;
