import {
  LOAD_RECENT_WORKS_SUCCESS,
  LOAD_RECENT_WORKS_FAILURE,
} from "../actions/recentWorksAction";

const initialState = {
  recentWorks: [],
  loading: false,
  error: null,
};

const recentWorksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECENT_WORKS_SUCCESS:
      return {
        ...state,
        recentWorks: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_RECENT_WORKS_FAILURE:
      return {
        ...state,
        recentWorks: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recentWorksReducer;
