import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Error404 from "../containers/errors/Error404";
import Home from "../containers/pages/Home";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Counter } from "./counter";
import { Form } from "./Form";
const MyApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Link to="/counterOne">
            <button>counterOne</button>
          </Link>
          <Link to="/counterTwo">
            <button>counterTwo</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
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
