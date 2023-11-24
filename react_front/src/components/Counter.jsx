import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/dummySlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => {
    return state.counter;
  });
  const onIncrement = () => {
    dispatch(increment());
  };

  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Counter</h1>
      <p className="text-lg mb-4">
        The value of the counter is:
        <span className="font-bold">{counterValue}</span>
      </p>
      <div className="flex space-x-4">
        <button
          onClick={onIncrement}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
        >
          +1
        </button>
        <button
          onClick={onDecrement}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300"
        >
          -1
        </button>
      </div>
    </div>
  );
};
