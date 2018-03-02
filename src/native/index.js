import React from 'react';
import {StatusBar, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {Router, Stack} from 'react-native-router-flux';
import {PersistGate} from 'redux-persist/es/integration/react';

import {StyleProvider} from 'native-base';
import getTheme from '../../native-base-theme/components';
import theme from '../../native-base-theme/variables/commonColor';

import {ApolloProvider} from 'react-apollo'
import {ApolloClient, HttpLink, InMemoryCache} from 'apollo-client-preset'

import Routes from './routes/index';
import Loading from './components/Loading';

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android') StatusBar.setHidden(true);

const httpLink = new HttpLink({uri: 'http://128.199.252.18:8080/graphql/'});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const Root = ({store, persistor}) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <PersistGate
        loading={<Loading/>}
        persistor={persistor}
      >
        <StyleProvider style={getTheme(theme)}>
          <Router>
            <Stack key="root">
              {Routes}
            </Stack>
          </Router>
        </StyleProvider>
      </PersistGate>
    </Provider>
  </ApolloProvider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
  persistor: PropTypes.shape({}).isRequired,
};

export default Root;
