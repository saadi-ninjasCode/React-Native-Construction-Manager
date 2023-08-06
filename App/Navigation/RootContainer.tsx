import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useMemo } from 'react';
import { Category, Dashboard, MachineItem } from '../Screen';
import { useAppSelector } from '../Hooks';
import { categoryNameList } from '../Selectors';
import { map } from 'lodash';

const Drawer = createDrawerNavigator();

function RootContainer() {
  const categoryNames = useAppSelector(categoryNameList);

  const categoryFilterName = useMemo(
    () =>
      map(categoryNames, name => (
        <Drawer.Screen key={name.categoryId} name={name.categoryName} component={MachineItem} />
      )),
    [categoryNames],
  );
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Manage Category" component={Category} />
      {categoryFilterName}
    </Drawer.Navigator>
  );
}

export default React.memo(RootContainer);
