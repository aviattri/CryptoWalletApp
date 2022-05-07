import { combineReducers } from "redux";

import tabReducer from "./tabs/tabReduer";
import marketReducer from "./market/marketReducer";
export default combineReducers({
  tabReducer,
  marketReducer,
});
