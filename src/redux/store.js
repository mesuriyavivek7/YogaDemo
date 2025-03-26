import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import videoReducer from "./reducers/videoReducer";

const rootReducers=combineReducers({
           videoSeq:videoReducer
})

export const store=legacy_createStore(rootReducers,applyMiddleware(thunk));