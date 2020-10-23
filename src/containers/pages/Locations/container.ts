import { connect } from 'react-redux';
import { requestLocations } from 'actions/location/locations';
import { StateProps } from 'types/interfaces';
import { Dispatch } from 'redux';
import { MapStateProps, MapDispatchProps } from './types';
import Locations from './component';

const mapStateToProps = (state: StateProps): MapStateProps => ({
  locations: state.location.list,
  locationsInfo: state.location.info,
  loading: state.location.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchLocations: (payload) => dispatch(requestLocations(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
