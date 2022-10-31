//Action types
import { JOBS_ACTION_TYPES } from "./jobs.types";

export const JOBS_INITIAL_STATE = {
  jobs: [],
  isLoading: false,
  error: null
};

export const jobsReducer = (state = JOBS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case JOBS_ACTION_TYPES.FETCH_JOBS_START:
      return { ...state, isLoading: true };

    case JOBS_ACTION_TYPES.FETCH_JOBS_SUCCESS:
      return { ...state, jobs: payload, isLoading: false };

    case JOBS_ACTION_TYPES.FETCH_JOBS_FAILED:
      return { ...state, isLoading: false, error: payload };

    default: return state;
  }
};