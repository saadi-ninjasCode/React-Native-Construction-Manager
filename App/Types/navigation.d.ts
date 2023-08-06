import { RouteProp } from '@react-navigation/core';
import { DrawerNavigationProp } from '@react-navigation/drawer';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends IPrimaryParams {}
  }
}

type IPrimaryParams = {
  Dashboard: undefined;
  ManageCategory: undefined;
  MachineItem: ICategoryObj;
};

// Navigation Stacks
type IMachineDrawerProp = DrawerNavigationProp<IPrimaryParams, 'MachineItem'>;

//Routes Params
type IMachineRouteProp = RouteProp<IPrimaryParams, 'MachineItem'>;
