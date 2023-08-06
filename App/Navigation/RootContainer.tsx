import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Category, Dashboard } from '../Screen';

const Drawer = createDrawerNavigator();

function RootContainer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Manage Category" component={Category} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

export default React.memo(RootContainer);
