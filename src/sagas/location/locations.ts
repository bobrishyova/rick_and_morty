import { put, takeLatest } from 'redux-saga/effects';
import qs from 'query-string';
import { LOCATIONS, URL_LOCATION } from 'constants/index';
import { successLocations, errorLocations } from 'actions/location/locations';
import request from 'helpers/request';

interface Payload {
  page: number;
}

interface Action<T> {
  type: string;
  payload: T;
}

function* fetchLocationsAsync({ payload }: Action<Payload>) {
  const { page } = payload;
  try {
    const response = yield request({ url: `${URL_LOCATION}?${qs.stringify({ page })}` });
    yield put(successLocations(response));
  } catch (error) {
    yield put(errorLocations(error));
  }
}

export default function* watchFetchLocations() {
  yield takeLatest(LOCATIONS.FETCH, fetchLocationsAsync);
}
