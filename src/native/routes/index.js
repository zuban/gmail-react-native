import React from 'react';
import { Scene, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DemoContainer from '../../containers/DemoContainer';
import DemoComponent from '../components/Demo';

const Index = (
  <Stack
    key="home"
    showLabel={false}
  >
    <Scene hideNavBar key="demo" component={DemoContainer} Layout={DemoComponent} />
  </Stack>
);

export default Index;
