import { call, put, takeLatest } from 'redux-saga/effects';
import customArrayUrlParse from 'helpers/customArrayUrlParse';
import { LOCATION, URL_LOCATION, URL_CHARACTER } from 'constants/index';
import { successLocation, errorLocation } from 'actions/location/location';

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
    const response = yield call(() => {
      return fetch(`${URL_LOCATION}${id}`).then((result) => result.json());
    });
    const responseResidents = yield call(() => {
      return fetch(`${URL_CHARACTER}${customArrayUrlParse(response.residents)}`).then((result) =>
        result.json(),
      );
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
