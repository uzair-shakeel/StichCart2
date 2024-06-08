import { all } from "redux-saga/effects";
import { loginWatcher } from "../sagas/auth-saga";
import { eventLogWatcher } from "../sagas/eventlog-saga";
import { categoryWatcher } from "../sagas/category-saga";
import { ratingWatcher } from "../sagas/rating-saga";
import { offerWatcher } from "../sagas/offer-saga";
import { customerCommentsWatcher } from "../sagas/customercomments-saga";
import { recentWorksSaga } from "../sagas/recentWorksSaga";
import { carouselSaga } from "../sagas/carouselSaga";

export default function* rootWatchers() {
  yield all([
    loginWatcher(),
    eventLogWatcher(),
    offerWatcher(),
    categoryWatcher(),
    ratingWatcher(),
    customerCommentsWatcher(),
    recentWorksSaga(),
    carouselSaga(),
  ]);
}
