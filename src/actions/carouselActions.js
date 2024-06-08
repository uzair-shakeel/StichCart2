export const LOAD_CAROUSEL_DATA = "LOAD_CAROUSEL_DATA";
export const LOAD_CAROUSEL_DATA_SUCCESS = "LOAD_CAROUSEL_DATA_SUCCESS";
export const LOAD_CAROUSEL_DATA_FAILURE = "LOAD_CAROUSEL_DATA_FAILURE";

export const loadCarouselData = () => ({
  type: LOAD_CAROUSEL_DATA,
});

export const loadCarouselDataSuccess = (carouselData) => ({
  type: LOAD_CAROUSEL_DATA_SUCCESS,
  payload: carouselData,
});

export const loadCarouselDataFailure = (error) => ({
  type: LOAD_CAROUSEL_DATA_FAILURE,
  payload: error,
});
