import { connect } from 'react-redux';
import { requestLocations } from 'actions/location/locations';
import { TypeState, MapStateProps, MapDispatchProps } from 'types/interfaces';
import { Dispatch } from 'redux';
import Locations from './component';

const mapStateToProps = (state: TypeState): MapStateProps => ({
  locations: state.location.list,
  locationsInfo: state.location.info,
  loading: state.location.loading,
});

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => ({
  getFetchLocations: (payload: object) => dispatch(requestLocations(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Locations);
