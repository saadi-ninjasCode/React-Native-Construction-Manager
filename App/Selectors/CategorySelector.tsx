import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { IRootReduxStateRTK } from '../RTK';
import { map } from 'lodash';

type ISelectorParamState<T> = [(state: IRootReduxStateRTK) => T];

const categoryNameList = createDraftSafeSelector<ISelectorParamState<ICategory[]>, ICategoryObj[]>(
  state => state.CategorySlice,
  CategorySlice => map(CategorySlice, ({ categoryId, categoryName }) => ({ categoryId, categoryName })),
);

export { categoryNameList };
