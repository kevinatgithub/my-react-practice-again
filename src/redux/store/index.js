import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../../reducers/index";
import {assignIdMiddleware} from "../../middlewares/index";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    storeEnhancers(applyMiddleware(assignIdMiddleware, thunk))
);

export default store;