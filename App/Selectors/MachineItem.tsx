import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { ISelectorParam2 } from '../Types/selector';

const machineItemList = createDraftSafeSelector<ISelectorParam2<IMachineItemStore, string>, IMachineItem[]>(
  [state => state.MachineItemSlice, (_, categoryId: string) => categoryId],
  (MachineItemStore, categoryId) => get(MachineItemStore, categoryId),
);

export { machineItemList };
