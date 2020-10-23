import { takeLatest, put } from 'redux-saga/effects';
import { CHARACTER, URL_CHARACTER, URL_EPISODE } from 'constants/index';
import { successCharacter, errorCharacter } from 'actions/character/character';
import customArrayUrlParse from 'helpers/customArrayUrlParse';
import request from 'helpers/request';

interface Payload {
  id: string;
  episodes: Array<object>;
}

interface Action<T> {
  type: string;
  payload: T;
}

function* fetchCharacterAsync({ payload }: Action<Payload>) {
  const { id } = payload;
  try {
    const response = yield request({ url: `${URL_CHARACTER}${id}` });
    const responseEpisodes = yield request({
      url: `${URL_EPISODE}${customArrayUrlParse(response.episode)}`,
    });
    yield put(
      successCharacter({
        ...response,
        episodes: responseEpisodes,
      }),
    );
  } catch (error) {
    yield put(errorCharacter(error));
  }
}

export default function* watchFetchCharacter() {
  yield takeLatest(CHARACTER.FETCH, fetchCharacterAsync);
}
