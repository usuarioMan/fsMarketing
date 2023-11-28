import PropTypes from "prop-types";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/navigation/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="pt-28">{children}</div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
