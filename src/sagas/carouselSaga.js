import { put, call, takeEvery } from "redux-saga/effects";
import carouselData from "../json/customer-testimonials.json";
import {
  LOAD_CAROUSEL_DATA,
  loadCarouselDataSuccess,
  loadCarouselDataFailure,
} from "../actions/carouselActions";

export function* fetchCarouselData() {
  try {
    // Simulate fetching data from a static file
    const data = yield call(() => carouselData);
    yield put(loadCarouselDataSuccess(data));
  } catch (error) {
    yield put(loadCarouselDataFailure(error));
  }
}

export function* carouselSaga() {
  yield takeEvery(LOAD_CAROUSEL_DATA, fetchCarouselData);
}
