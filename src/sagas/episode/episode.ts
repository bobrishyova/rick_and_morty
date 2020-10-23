import { takeLatest, put } from 'redux-saga/effects';
import customArrayUrlParse from 'helpers/customArrayUrlParse';
import { EPISODE, URL_EPISODE, URL_CHARACTER } from 'constants/index';
import { successEpisode, errorEpisode } from 'actions/episode/episode';
import request from 'helpers/request';

interface Payload {
  id: string;
  characters: Array<object>;
}

interface Action<T> {
  type: string;
  payload: T;
}

function* fetchEpisodeAsync({ payload }: Action<Payload>) {
  const { id } = payload;
  try {
    const response = yield request({ url: `${URL_EPISODE}${id}` });
    const responseCharacters = yield request({
      url: `${URL_CHARACTER}${customArrayUrlParse(response.characters)}`,
    });
    yield put(
      successEpisode({
        ...response,
        characters: responseCharacters,
      }),
    );
  } catch (error) {
    yield put(errorEpisode(error));
  }
}

export default function* watchFetchEpisode() {
  yield takeLatest(EPISODE.FETCH, fetchEpisodeAsync);
}
