import { connect } from 'react-redux';
import { requestEpisodes } from 'actions/episode/episodes';
import { Dispatch } from 'redux';
import { TypeState, MapStateProps, MapDispatchProps } from 'types/interfaces';
import Episodes from './component';

const mapStateToProps = (state: TypeState): MapStateProps => ({
  episodes: state.episode.list,
  episodesInfo: state.episode.info,
  loading: state.episode.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchEpisodes: (payload: object) => dispatch(requestEpisodes(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
