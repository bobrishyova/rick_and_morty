import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { TypeState, MapStateProps, MapDispatchProps } from 'types/interfaces';
import { requestCharacter } from 'actions/character/character';
import СharacterInfo from './component';

const mapStateToProps = (state: TypeState): MapStateProps => ({
  character: state.character.item,
  loading: state.character.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchCharacter: (payload: object) => dispatch(requestCharacter(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(СharacterInfo);
