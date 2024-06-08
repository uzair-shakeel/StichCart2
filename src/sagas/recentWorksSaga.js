import { put, call, takeEvery } from "redux-saga/effects";
import recentWorksData from "../json/new-products.json";
import {
  LOAD_RECENT_WORKS,
  loadRecentWorksSuccess,
  loadRecentWorksFailure,
} from "../actions/recentWorksAction";

export function* fetchRecentWorks() {
  try {
    // Simulate fetching data from a static file
    const recentWorks = yield call(() => recentWorksData);
    yield put(loadRecentWorksSuccess(recentWorks));
  } catch (error) {
    yield put(loadRecentWorksFailure(error));
  }
}

export function* recentWorksSaga() {
  yield takeEvery(LOAD_RECENT_WORKS, fetchRecentWorks);
}
