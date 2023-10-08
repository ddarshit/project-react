import { createStore } from "redux";
import rootreducer from "./Reducer/Index";

const Store = createStore(rootreducer);

export default Store;
