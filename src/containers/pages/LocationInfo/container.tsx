import { connect } from 'react-redux';
import { requestLocation } from 'actions/location/location';
import { Dispatch } from 'redux';
import { TypeState, MapStateProps, MapDispatchProps } from 'types/interfaces';
import LocationInfo from './component';

const mapStateToProps = (state: TypeState): MapStateProps => ({
  location: state.location.item,
  loading: state.location.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchLocation: (payload: object) => dispatch(requestLocation(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo);
