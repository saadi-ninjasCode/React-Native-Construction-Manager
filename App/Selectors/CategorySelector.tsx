import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { find, isEqual, map } from 'lodash';
import { ISelectorParamState, ISelectorParam2 } from '../Types/selector';

const categoryNameList = createDraftSafeSelector<ISelectorParamState<ICategory[]>, ICategoryObj[]>(
  state => state.CategorySlice,
  CategorySlice => map(CategorySlice, ({ categoryId, categoryName }) => ({ categoryId, categoryName })),
);

const categoryDataSections = createDraftSafeSelector<ISelectorParamState<ICategory[]>, ICategorySectionList[]>(
  state => state.CategorySlice,
  CategorySlice =>
    map(CategorySlice, categoryObj => ({
      title: categoryObj?.categoryName,
      data: [categoryObj?.categoryId],
    })),
  {
    memoizeOptions: {
      equalityCheck: isEqual,
    },
  },
);

const categoryDataSelector = createDraftSafeSelector<ISelectorParam2<ICategory[], string>, ICategory | undefined>(
  [state => state.CategorySlice, (_, categoryId: string) => categoryId],
  (CategorySlice, categoryId) => find(CategorySlice, { categoryId: categoryId }),
  {
    memoizeOptions: {
      equalityCheck: isEqual,
    },
  },
);

export { categoryNameList, categoryDataSections, categoryDataSelector };
