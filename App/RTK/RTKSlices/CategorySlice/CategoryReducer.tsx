import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { filter, forEach, uniqueId } from 'lodash';
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

const updateCategoryName: CaseReducer<ICategory[], PayloadAction<{ categoryId: string; categoryName: string }>> = (
  state,
  { payload: { categoryId, categoryName } },
) => {
  const newArr: ICategory[] = [];
  forEach(state, categoryObj => {
    if (categoryObj.categoryId === categoryId) {
      categoryObj.categoryName = categoryName;
    }
    newArr.push(categoryObj);
  });
  state = newArr;
};

const removeCategory: CaseReducer<ICategory[], PayloadAction<string>> = (state, { payload }) =>
  filter(state, category => category.categoryId !== payload);

const setCategoryTitleField: CaseReducer<ICategory[], PayloadAction<{ categoryId: string; fieldName: string }>> = (
  state,
  { payload: { categoryId, fieldName } },
) => {
  const newArr: ICategory[] = [];
  forEach(state, categoryObj => {
    if (categoryObj.categoryId === categoryId) {
      categoryObj.titleField = fieldName;
    }
    newArr.push(categoryObj);
  });
  state = newArr;
};

const addCategoryField: CaseReducer<ICategory[], PayloadAction<{ categoryId: string; fieldType: FIELD_TYPES }>> = (
  state,
  { payload: { categoryId, fieldType } },
) => {
  const newArr: ICategory[] = [];
  forEach(state, categoryObj => {
    if (categoryObj.categoryId === categoryId) {
      categoryObj.fieldsArray = [
        ...categoryObj.fieldsArray,
        {
          fieldId: uniqueId(`${categoryId}_field_`),
          fieldType: fieldType,
          fieldValue: '',
        },
      ];
    }
    newArr.push(categoryObj);
  });
  state = newArr;
};

const updateCategoryFieldValue: CaseReducer<
  ICategory[],
  PayloadAction<{ categoryId: string; fieldId: string; value: string }>
> = (state, { payload: { categoryId, fieldId, value } }) => {
  const newArr: ICategory[] = [];
  forEach(state, categoryObj => {
    if (categoryObj.categoryId === categoryId) {
      const newFieldArr: IField[] = [];
      forEach(categoryObj?.fieldsArray, fieldObj => {
        if (fieldObj.fieldId === fieldId) {
          fieldObj.fieldValue = value;
        }
        newFieldArr.push(fieldObj);
      });
      categoryObj.fieldsArray = newFieldArr;
    }
    newArr.push(categoryObj);
  });
  state = newArr;
};

const removeCategoryField: CaseReducer<ICategory[], PayloadAction<{ categoryId: string; fieldId: string }>> = (
  state,
  { payload: { categoryId, fieldId } },
) => {
  const newArr: ICategory[] = [];
  forEach(state, categoryObj => {
    if (categoryObj.categoryId === categoryId) {
      categoryObj.fieldsArray = filter(categoryObj.fieldsArray, field => field.fieldId !== fieldId);
    }
    newArr.push(categoryObj);
  });
  state = newArr;
};

export {
  addNewCategory,
  updateCategoryName,
  removeCategory,
  setCategoryTitleField,
  addCategoryField,
  updateCategoryFieldValue,
  removeCategoryField,
};
