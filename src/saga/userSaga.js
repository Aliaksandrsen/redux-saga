import { put, takeEvery, call } from "redux-saga/effects";

import { setUsers, FETCH_USERS } from "../store/userReducer";

const fetchUsersFromApi = () =>
  fetch("https://jsonplaceholder.typicode.com/users?_limit=10");

function* fetchUsersWorker() {
  const data = yield call(fetchUsersFromApi);
  const res = yield data.json();

  yield put(setUsers(res));
}

export function* userWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersWorker);
}
