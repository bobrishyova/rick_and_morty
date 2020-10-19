import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestEpisode } from 'actions/episode/episode';
import { TypeState, MapStateProps, MapDispatchProps } from 'types/interfaces';
import EpisodeInfo from './component';

const mapStateToProps = (state: TypeState): MapStateProps => ({
  episode: state.episode.item,
  loading: state.episode.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchEpisode: (payload: object) => dispatch(requestEpisode(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeInfo);
