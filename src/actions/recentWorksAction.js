export const LOAD_RECENT_WORKS = "LOAD_RECENT_WORKS";
export const LOAD_RECENT_WORKS_SUCCESS = "LOAD_RECENT_WORKS_SUCCESS";
export const LOAD_RECENT_WORKS_FAILURE = "LOAD_RECENT_WORKS_FAILURE";

export const loadRecentWorks = () => ({
  type: LOAD_RECENT_WORKS,
});

export const loadRecentWorksSuccess = (recentWorks) => ({
  type: LOAD_RECENT_WORKS_SUCCESS,
  payload: recentWorks,
});

export const loadRecentWorksFailure = (error) => ({
  type: LOAD_RECENT_WORKS_FAILURE,
  payload: error,
});
