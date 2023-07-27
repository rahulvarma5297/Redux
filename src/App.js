import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";
import Form from "./Components/Form";

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

      {/* <Form /> */}
    </div>
  );
}

export default App;
