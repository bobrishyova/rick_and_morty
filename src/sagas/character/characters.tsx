import { call, put, takeLatest } from 'redux-saga/effects';
import qs from 'query-string';
import { CHARACTERS, URL_CHARACTER } from 'constants/index';
import { successCharacters, errorCharacters } from 'actions/character/characters';

interface Payload {
  page: number;
}

interface Action<T> {
  type: string;
  payload: T;
}

function* fetchCharactersAsync({ payload }: Action<Payload>) {
  const { page } = payload;
  try {
    const response = yield call(() => {
      return fetch(`${URL_CHARACTER}/?${qs.stringify({ page })}`).then((result) => result.json());
    });
    yield put(successCharacters(response));
  } catch (error) {
    yield put(errorCharacters(error));
  }
}

export default function* watchFetchCharacters() {
  yield takeLatest(CHARACTERS.FETCH, fetchCharactersAsync);
}
