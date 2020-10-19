import { all } from 'redux-saga/effects';
import characterRoot from './character/character';
import charactersRoot from './character/characters';
import episodeRoot from './episode/episode';
import episodesRoot from './episode/episodes';
import locationRoot from './location/location';
import locationsRoot from './location/locations';

export default function* rootSaga() {
  yield all([
    characterRoot(),
    charactersRoot(),
    episodeRoot(),
    episodesRoot(),
    locationRoot(),
    locationsRoot(),
  ]);
}
