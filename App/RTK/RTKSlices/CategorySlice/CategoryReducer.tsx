import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { filter, uniqueId } from 'lodash';
import { FIELD_TYPES } from '../../../Utility';

const addNewCategory: CaseReducer<ICategory[]> = state => {
  state.push({
    categoryId: uniqueId('category_'),
    categoryName: '',
    titleField: '-',
    fieldsArray: [
      {
        fieldId: uniqueId('field_'),
        fieldType: FIELD_TYPES.TEXT,
        fieldValue: '',
      },
    ],
  });
};

const removeCategory: CaseReducer<ICategory[], PayloadAction<string>> = (state, { payload }) =>
  filter(state, category => category.categoryId !== payload);

export { addNewCategory, removeCategory };
