import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestCharacter } from 'actions/character/character';
import { StateProps } from 'types/interfaces';
import { MapStateProps, MapDispatchProps } from './types';
import СharacterInfo from './component';

const mapStateToProps = (state: StateProps): MapStateProps => ({
  character: state.character.item,
  loading: state.character.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchCharacter: (payload) => dispatch(requestCharacter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СharacterInfo);
