import { NavLink } from "react-router-dom";
import lilLogo from "../../static/lilLogo.png";
import loading from "../../static/loading.gif";
export default function NavBar() {
  return (
    <nav className="w-full py-2 fixed top-0">
      <div className=" bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
          <div className="ml-4 mt-2">
            <img src={lilLogo} width={110} height={100} alt="Aranda abogados" />
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
            <NavLink
              to={"/casos"}
              className="inline-flex text-base font-semibold leading-6 text-gray-900 hover:text-orange-500 hover:underline hover:underline-offset-4 mx-4"
            >
              Casos
            </NavLink>
            <NavLink
              to={"/servicios"}
              className="inline-flex text-base font-semibold leading-6 text-gray-900 hover:text-orange-500 hover:underline hover:underline-offset-4 mx-4"
            >
              Servicios
            </NavLink>
            <NavLink
              to={"/nosotros"}
              className="inline-flex text-base font-semibold leading-6 text-gray-900 hover:text-orange-500 hover:underline hover:underline-offset-4 mx-4"
            >
              Nosotros
            </NavLink>
            <NavLink
              to={"/carreras"}
              className="inline-flex text-base font-semibold leading-6 text-gray-900 hover:text-orange-500 hover:underline hover:underline-offset-4 mx-4"
            >
              Carreras
            </NavLink>
            <NavLink
              to={"/blog"}
              className="inline-flex text-base font-semibold leading-6 text-gray-900 hover:text-orange-500 hover:underline hover:underline-offset-4 mx-4"
            >
              Blog
            </NavLink>
            <NavLink
              to={"/contacto"}
              className="inline-flex text-base font-semibold leading-6 text-gray-900 hover:text-orange-500 hover:underline hover:underline-offset-4 mx-4"
            >
              Contacto
            </NavLink>

            <button
              type="button"
              className="ml-12 relative inline-flex items-center rounded-md bg-legal-blue px-6 py-2 text-lg font-bold text-white shadow-sm hover:bg-legal-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:legal-blue-600"
            >
              Consulta
              <img src={loading} className="w-10 h-10" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
