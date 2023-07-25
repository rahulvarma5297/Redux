const initialState = 0;

const changeTheNumber = (start = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return start + action.payload;
    case "DECREMENT":
      return start - action.payload;
    default:
      return start;
  }
};

export default changeTheNumber;