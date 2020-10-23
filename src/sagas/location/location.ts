import { put, takeLatest } from 'redux-saga/effects';
import customArrayUrlParse from 'helpers/customArrayUrlParse';
import { LOCATION, URL_LOCATION, URL_CHARACTER } from 'constants/index';
import { successLocation, errorLocation } from 'actions/location/location';
import request from 'helpers/request';

interface Payload {
  id: string;
}

interface Action<T> {
  type: string;
  payload: T;
}

function* fetchLocationAsync({ payload }: Action<Payload>) {
  const { id } = payload;
  try {
    const response = yield request({ url: `${URL_LOCATION}${id}` });
    const responseResidents = yield request({
      url: `${URL_CHARACTER}${customArrayUrlParse(response.residents)}`,
    });
    yield put(
      successLocation({
        ...response,
        residents: responseResidents,
      }),
    );
  } catch (error) {
    yield put(errorLocation(error));
  }
}

export default function* watchFetchLocation() {
  yield takeLatest(LOCATION.FETCH, fetchLocationAsync);
}
