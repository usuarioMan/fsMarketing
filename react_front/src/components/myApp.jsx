import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "../containers/errors/Error404";
import Home from "../containers/pages/Home";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const MyApp = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Provider>
  );
};

export default MyApp;
