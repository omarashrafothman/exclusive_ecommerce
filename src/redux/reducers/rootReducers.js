// store/reducers/index.js
import { combineReducers } from "redux";
import authantication from "./authanticationReducer";
const rootReducer = combineReducers({
  auth: authantication,
  // other reducers can be added here
});

export default rootReducer;
