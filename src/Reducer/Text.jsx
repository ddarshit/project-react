const Text = (state = null , action) => {
  switch (action.type) {
    case "TEXT":
      return state = "HELLO DD";
    case "REMOVETEXT":
      return state = "";
    default:
      return state;
  } 
};
export default Text;
