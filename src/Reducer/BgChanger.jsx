const initialState = {
  color: "white",
};

const BgChanger = (state = {initialState}, action) => {
  switch (action.type) {
    case "CHANGE_BG":
      return { color: "#" + Math.random().toString(16).slice(2,8) };
      // return { color: "black"  };
    case "RESET_BG":
      return { color: '#ffffff'};
    default:
      return state;
  }
};
export default BgChanger;
