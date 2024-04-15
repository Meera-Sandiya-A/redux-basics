import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/AccountSlice";
import customerReducer from "./features/customers/CustomerSlice";

// combine both reducers
const rootReducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducers);

export default store;
