//Reducer shorthand
import { createAction } from "../../utils/reducer/reducer.utils";

//Action types
import { JOBS_ACTION_TYPES } from "./jobs.types";

//DB List Actions
export const fetchJobsStart = () =>
  createAction(JOBS_ACTION_TYPES.FETCH_JOBS_START);

export const fetchJobsSuccess = (jobsArray) =>
  createAction(JOBS_ACTION_TYPES.FETCH_JOBS_SUCCESS, jobsArray);

export const fetchJobsFailed = (error) =>
  createAction(JOBS_ACTION_TYPES.FETCH_JOBS_FAILED, error);

export const fetchJobsAsync = () => async (dispatch) => {
  dispatch(fetchJobsStart());

  try {
    const data = await fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data", {
      headers: {
        "Authorization": "Bearer wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu",
      },
      method: "GET"
    });
    dispatch(fetchJobsSuccess(await data.json()));
  } catch (error) {
    dispatch(fetchJobsFailed(error));
  }

};