import { put, call, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/customercomments-action';
import  CustomerCommentsApi from '../service/customercomments-api';
import LoggerApi from '../service/sclogger-api';
import * as constants from '../util/constants';
const { addCustomerComments } = actions;

/******************************************************************************/
/******************************* WATCHERS *************************************/
/******************************************************************************/
export function* doAddCustomerComments(action) {
    try {
        yield put(addCustomerComments.request()); 
        yield call(CustomerCommentsApi.addComments, action.addCommentsReq);
        yield put(addCustomerComments.success());
    }catch (err) {
        yield put(addCustomerComments.failure('Sorry, Saving your comments encountered an error. Please try again'));
        //LoggerApi.recordError(constants.LOG_LEVEL.error, `Error in load recent review`, err);
    }
}

// Manage the customer comments watch
export function* customerCommentsWatcher() {
    yield takeEvery(actions.ADD_CUSTOMER_COMMENTS, doAddCustomerComments)
}