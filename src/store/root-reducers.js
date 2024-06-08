import { combineReducers } from "redux";
import authReducers from "../reducers/auth-reducer";
import offerReducers from "../reducers/offer-reducer";
import firebaseRemoteConfigReducers from "../reducers/firebaseremoteconfig-reducer";
import categoryReducers from "../reducers/category-reducer";
import RatingReducers from "../reducers/rating-reducer";
import CustomerCommentsReducer from "../reducers/customercomments-reducer";
import recentWorksReducer from "../reducers/recentWorksReducer";
import carouselReducer from "../reducers/carouselReducer";

const rootReducer = combineReducers({
  authState: authReducers,
  offerState: offerReducers,
  configState: firebaseRemoteConfigReducers,
  categoryState: categoryReducers,
  ratingState: RatingReducers,
  customerCommentsState: CustomerCommentsReducer,
  recentWorks: recentWorksReducer,
  carousel: carouselReducer,
});

export default rootReducer;
