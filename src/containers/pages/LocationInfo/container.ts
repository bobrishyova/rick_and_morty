import { connect } from 'react-redux';
import { requestLocation } from 'actions/location/location';
import { Dispatch } from 'redux';
import { StateProps } from 'types/interfaces';
import { MapStateProps, MapDispatchProps } from './types';
import LocationInfo from './component';

const mapStateToProps = (state: StateProps): MapStateProps => ({
  location: state.location.item,
  loading: state.location.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchLocation: (payload) => dispatch(requestLocation(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo);
