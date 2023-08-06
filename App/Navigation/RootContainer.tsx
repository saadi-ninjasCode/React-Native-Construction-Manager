import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Category, Dashboard, MachineItem } from '../Screen';
import Sidebar from './Sidebar';
import { IPrimaryParams } from '../Types/navigation';

const Drawer = createDrawerNavigator<IPrimaryParams>();

function RootContainer() {
  return (
    <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen
        name="MachineItem"
        component={MachineItem}
        options={{ title: 'Machine', drawerItemStyle: { height: 0 } }}
      />
      <Drawer.Screen name="ManageCategory" options={{ title: 'Manage Category' }} component={Category} />
    </Drawer.Navigator>
  );
}

export default React.memo(RootContainer);
