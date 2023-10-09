import ChangeNumber from "./ChangeNumber";
import { combineReducers } from "redux";
import Text from "./Text"
import BgChanger from "./BgChanger";



const rootreducer = combineReducers({

    ChangeNumber, Text, BgChanger

});

export default rootreducer;
