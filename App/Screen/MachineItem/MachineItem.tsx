/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useLayoutEffect, useMemo } from 'react';
import { IMachineDrawerProp, IMachineRouteProp } from '../../Types/navigation';
import { useAppDispatch, useAppSelector } from '../../Hooks';
import { categoryDataSelector, machineItemList } from '../../Selectors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-paper';
import { styles } from './styles';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { isTablet } from 'react-native-device-info';
import { SubCategoryBox } from '../../Component';
import { MachineItemSliceAction } from '../../RTK';

function MachineItem() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<IMachineDrawerProp>();
  const routes = useRoute<IMachineRouteProp>();
  const categoryName = routes?.params?.categoryName ?? '';
  const categoryId = routes?.params?.categoryId ?? '';

  const categoryData = useAppSelector(state => categoryDataSelector(state, categoryId));
  const itemList = useAppSelector(state => machineItemList(state, categoryId));

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, [categoryName]);

  const keyExtracted = useCallback((item: IMachineItem) => item.itemId, []);
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IMachineItem>) => {
      return <SubCategoryBox titleField={categoryData?.titleField ?? ''} {...item} />;
    },
    [categoryData?.titleField],
  );

  const emptyView = useMemo(
    () => (
      <View style={styles.emptyView}>
        <Text variant="bodyMedium">No data found</Text>
      </View>
    ),
    [],
  );

  const addNewItem = useCallback(() => {
    if ((categoryData?.fieldsArray ?? [])?.length > 0) {
      dispatch(
        MachineItemSliceAction.addMachineItem({
          categoryId,
          categoryName,
          fieldArray: categoryData?.fieldsArray ?? [],
        }),
      );
    }
  }, [categoryData?.fieldsArray, categoryId, categoryName, dispatch]);

  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        data={itemList}
        style={[styles.flexGrow]}
        ListEmptyComponent={emptyView}
        numColumns={isTablet() ? 2 : 1}
        contentContainerStyle={[styles.flexGrow, styles.boxContainer]}
        keyExtractor={keyExtracted}
        renderItem={renderItem}
      />
      <Button style={styles.addBtn} mode="contained" onPress={addNewItem}>
        Add New Item
      </Button>
    </SafeAreaView>
  );
}

export default React.memo(MachineItem);
