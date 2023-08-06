/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryBox } from '../../Component';
import { useAppDispatch, useAppSelector } from '../../Hooks';
import { CategorySliceAction } from '../../RTK';
import { styles } from './styles';

function Category() {
  const dispatch = useAppDispatch();
  const categoryArray = useAppSelector(state => state.CategorySlice);

  const addNewCategory = useCallback(() => {
    dispatch(CategorySliceAction.addNewCategory());
  }, []);

  const keyExtracted = useCallback((item: ICategory) => item.categoryId, []);
  const renderItem = useCallback(({ item }: ListRenderItemInfo<ICategory>) => {
    return <CategoryBox {...item} key={item.categoryId} />;
  }, []);

  return (
    <SafeAreaView style={styles.flex}>
      <KeyboardAwareFlatList
        style={[styles.flexGrow]}
        numColumns={isTablet() ? 2 : 1}
        contentContainerStyle={[styles.flexGrow, styles.boxContainer]}
        data={categoryArray}
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
