import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Dashboard} from '../Screen';

const Drawer = createDrawerNavigator();

function RootContainer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Dashboard} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default React.memo(RootContainer);
