import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { filter, get, map, set, uniqueId } from 'lodash';

const addMachineItem: CaseReducer<
  IMachineItemStore,
  PayloadAction<{ categoryId: string; categoryName: string; fieldArray: IField[] }>
> = (state, { payload: { categoryId, categoryName, fieldArray } }) => {
  const newInputObj: IMachineItem = {
    categoryId,
    categoryName,
    itemId: uniqueId('item_'),
    itemArray: map(fieldArray, inputField => ({
      fieldId: inputField?.fieldId,
      inputId: uniqueId('input_'),
      inputType: inputField?.fieldType,
      inputTitle: inputField?.fieldValue,
      inputValue: '',
    })),
  };
  const newObj = [...get(state, categoryId, []), newInputObj];
  set(state, categoryId, newObj);
};

const removeMachineItem: CaseReducer<IMachineItemStore, PayloadAction<{ categoryId: string; itemId: string }>> = (
  state,
  { payload: { categoryId, itemId } },
) => {
  const categoryItemArray = get(state, categoryId);
  const newObj = filter(categoryItemArray, item => item.itemId !== itemId);
  set(state, categoryId, newObj);
};

export { addMachineItem, removeMachineItem };
