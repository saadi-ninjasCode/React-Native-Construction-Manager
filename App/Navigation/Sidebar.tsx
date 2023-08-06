import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { map } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { useAppSelector } from '../Hooks';
import { categoryNameList } from '../Selectors';

function Sidebar(props: DrawerContentComponentProps) {
  const categoryNames = useAppSelector(categoryNameList);

  const machineItemNavigate = useCallback(
    (machineData: ICategoryObj) => () => {
      props.navigation.navigate('MachineItem', { ...machineData });
    },
    [props.navigation],
  );

  const categoryFilterName = useMemo(
    () =>
      map(categoryNames, name => (
        <DrawerItem key={name.categoryId} label={name.categoryName} onPress={machineItemNavigate(name)} />
      )),
    [categoryNames, machineItemNavigate],
  );

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {categoryFilterName}
    </DrawerContentScrollView>
  );
}

export default React.memo(Sidebar);
