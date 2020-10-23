import { put, takeLatest } from 'redux-saga/effects';
import qs from 'query-string';
import { CHARACTERS, URL_CHARACTER } from 'constants/index';
import { successCharacters, errorCharacters } from 'actions/character/characters';
import request from 'helpers/request';

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
    const response = yield request({ url: `${URL_CHARACTER}/?${qs.stringify({ page })}` });
    yield put(successCharacters(response));
  } catch (error) {
    yield put(errorCharacters(error));
  }
}

export default function* watchFetchCharacters() {
  yield takeLatest(CHARACTERS.FETCH, fetchCharactersAsync);
}
