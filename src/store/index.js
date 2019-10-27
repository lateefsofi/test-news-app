import { combineReducers } from "redux";

import articles from "./reducer";

const rootReducer = combineReducers({
  articles
});

export default rootReducer;