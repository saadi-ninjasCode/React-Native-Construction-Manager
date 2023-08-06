import { filter, forEach, uniqueId } from 'lodash';
import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryBox } from '../../Component';
import { FIELD_TYPES } from '../../Utility';
import { styles } from './styles';
import { useAppDispatch, useAppSelector } from '../../Hooks';
import { CategorySliceAction } from '../../RTK';

function Category() {
  const dispatch = useAppDispatch();
  const categoryArray1 = useAppSelector(state => state.CategorySlice);

  const setCategoryTitleField = useCallback((categoryId: string, fieldName: string) => {
    dispatch(CategorySliceAction.setCategoryTitleField({ categoryId, fieldName }));
  }, []);

  const addCategoryField = useCallback((categoryId: string, fieldType: FIELD_TYPES) => {
    dispatch(CategorySliceAction.addCategoryField({ categoryId, fieldType }));
  }, []);

  const updateCategoryFieldValue = useCallback((categoryId: string, fieldId: string, value: string) => {
    dispatch(CategorySliceAction.updateCategoryFieldValue({ categoryId, fieldId, value }));
  }, []);

  const removeCategoryField = useCallback((categoryId: string, fieldId: string) => {
    dispatch(CategorySliceAction.removeCategoryField({ categoryId, fieldId }));
  }, []);

  const addNewCategory = useCallback(() => {
    dispatch(CategorySliceAction.addNewCategory());
  }, []);

  const removeCategory = useCallback(
    (id: string) => () => {
      dispatch(CategorySliceAction.removeCategory(id));
    },
    [],
  );

  const updateCategoryName = useCallback((id: string, categoryName: string) => {
    dispatch(CategorySliceAction.updateCategoryName({ categoryId: id, categoryName }));
  }, []);

  const keyExtracted = useCallback((item: ICategory) => item.categoryId, []);
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<ICategory>) => {
      return (
        <CategoryBox
          {...item}
          key={item.categoryId}
          removeCategory={removeCategory}
          addCategoryField={addCategoryField}
          updateCategoryName={updateCategoryName}
          removeCategoryField={removeCategoryField}
          setCategoryTitleField={setCategoryTitleField}
          updateCategoryFieldValue={updateCategoryFieldValue}
        />
      );
    },
    [
      addCategoryField,
      removeCategory,
      removeCategoryField,
      setCategoryTitleField,
      updateCategoryFieldValue,
      updateCategoryName,
    ],
  );

  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        style={[styles.flexGrow]}
        numColumns={isTablet() ? 2 : 1}
        contentContainerStyle={[styles.flexGrow, styles.boxContainer]}
        data={categoryArray1}
        keyExtractor={keyExtracted}
        renderItem={renderItem}
      />
      <Button style={styles.addBtn} mode="contained" onPress={addNewCategory}>
        Add Category
      </Button>
    </SafeAreaView>
  );
}

export default React.memo(Category);
