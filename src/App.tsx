import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/blocks/Header/index';
import Characters from 'containers/pages/Characters/index';
import СharacterInfo from 'containers/pages/СharacterInfo/index';
import Episodes from 'containers/pages/Episodes/index';
import EpisodeInfo from 'containers/pages/EpisodeInfo/index';
import Locations from 'containers/pages/Locations/index';
import LocationInfo from 'containers/pages/LocationInfo/index';
import Theme from 'wrapper/theme/index';
import store from 'store';
import {
  CHARACTERS_PAGE,
  CHARACTER_INFO_PAGE,
  EPISODES_PAGE,
  EPISODE_INFO_PAGE,
  LOCATIONS_PAGE,
  LOCATION_INFO_PAGE,
  DARK_THEME_NAME,
} from 'constants/index';

const App = () => (
  <Provider store={store}>
    <Theme theme={DARK_THEME_NAME}>
      <Router>
        <Header />
        <Switch>
          <Route path={CHARACTERS_PAGE} component={Characters} />
          <Route path={CHARACTER_INFO_PAGE} component={СharacterInfo} />
          <Route path={EPISODES_PAGE} component={Episodes} />
          <Route path={EPISODE_INFO_PAGE} component={EpisodeInfo} />
          <Route path={LOCATIONS_PAGE} component={Locations} />
          <Route path={LOCATION_INFO_PAGE} component={LocationInfo} />
        </Switch>
      </Router>
    </Theme>
  </Provider>
);

export default App;
