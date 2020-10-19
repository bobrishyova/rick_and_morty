import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { requestCharacters } from 'actions/character/characters';
import { TypeState, MapStateProps, MapDispatchProps } from 'types/interfaces';
import Characters from './component';

const mapStateToProps = (state: TypeState): MapStateProps => ({
  characters: state.character.list,
  charactersInfo: state.character.info,
  loading: state.character.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchCharacters: (payload: object) => dispatch(requestCharacters(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
