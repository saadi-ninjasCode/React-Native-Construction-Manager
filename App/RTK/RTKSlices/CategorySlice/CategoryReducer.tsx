import { CaseReducer } from '@reduxjs/toolkit';
import { uniqueId } from 'lodash';
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

export { addNewCategory };
