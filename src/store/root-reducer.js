//Misc
import { combineReducers } from "redux";

//Reducers
import { jobsReducer } from "./jobs/jobs.reducer";

export const rootReducer = combineReducers({
  jobs: jobsReducer,
});