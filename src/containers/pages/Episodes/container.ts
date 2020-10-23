import { connect } from 'react-redux';
import { requestEpisodes } from 'actions/episode/episodes';
import { Dispatch } from 'redux';
import { StateProps } from 'types/interfaces';
import { MapStateProps, MapDispatchProps } from './types';
import Episodes from './component';

const mapStateToProps = (state: StateProps): MapStateProps => ({
  episodes: state.episode.list,
  episodesInfo: state.episode.info,
  loading: state.episode.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchEpisodes: (payload) => dispatch(requestEpisodes(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
