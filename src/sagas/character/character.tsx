import { takeLatest, put, call } from 'redux-saga/effects';
import { CHARACTER, URL_CHARACTER, URL_EPISODE } from 'constants/index';
import { successCharacter, errorCharacter } from 'actions/character/character';
import customArrayUrlParse from 'helpers/customArrayUrlParse';

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
    const response = yield call(() => {
      return fetch(`${URL_CHARACTER}${id}`).then((result) => result.json());
    });
    const responseEpisodes = yield call(() => {
      return fetch(`${URL_EPISODE}${customArrayUrlParse(response.episode)}`).then((result) =>
        result.json(),
      );
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
