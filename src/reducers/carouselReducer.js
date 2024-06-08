import {
  LOAD_CAROUSEL_DATA_SUCCESS,
  LOAD_CAROUSEL_DATA_FAILURE,
} from "../actions/carouselActions";

const initialState = {
  carouselData: [],
  loading: false,
  error: null,
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CAROUSEL_DATA_SUCCESS:
      return {
        ...state,
        carouselData: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_CAROUSEL_DATA_FAILURE:
      return {
        ...state,
        carouselData: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default carouselReducer;
