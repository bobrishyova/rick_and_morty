import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestEpisode } from 'actions/episode/episode';
import { StateProps } from 'types/interfaces';
import { MapStateProps, MapDispatchProps } from './types';
import EpisodeInfo from './component';

const mapStateToProps = (state: StateProps): MapStateProps => ({
  episode: state.episode.item,
  loading: state.episode.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchEpisode: (payload) => dispatch(requestEpisode(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeInfo);
