//Misc
import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

//Root reducer
import { rootReducer } from "./root-reducer";

//Middlewares
const middleWares = [thunk];
const composedEnhancers = compose(applyMiddleware(...middleWares));

//Redux Persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "jobs",
  ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);