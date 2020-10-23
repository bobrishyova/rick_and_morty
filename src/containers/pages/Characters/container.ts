import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestCharacters } from 'actions/character/characters';
import { StateProps } from 'types/interfaces';
import { MapStateProps, MapDispatchProps } from './types';
import Characters from './component';

const mapStateToProps = (state: StateProps): MapStateProps => ({
  characters: state.character.list,
  charactersInfo: state.character.info,
  loading: state.character.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchCharacters: (payload) => dispatch(requestCharacters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
