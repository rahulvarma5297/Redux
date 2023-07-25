import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const count = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="div1">
      <div className="div2">
        <button
          onClick={() => {
            dispatch(decNumber(5));
          }}
        >
          -
        </button>
        {count}
        <button
          onClick={() => {
            dispatch(incNumber(5));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
