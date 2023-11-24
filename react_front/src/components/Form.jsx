import { inputChange, sumbit } from "../redux/formSlice";
import { useDispatch, useSelector } from "react-redux";

export const Form = () => {
  let dispatch = useDispatch();
  let inputValue = useSelector((state) => state.form);
  console.log(inputValue);
  const handleChange = (e) => {
    dispatch(inputChange(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sumbit());
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">My Form</h1>
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="inputField"
          className="block text-sm font-medium text-gray-700"
        >
          Input Field
        </label>
        <input
          type="text"
          id="inputField"
          className="mt-1 p-2 block w-full rounded-md border focus:ring focus:border-blue-300"
          placeholder="Enter text..."
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
