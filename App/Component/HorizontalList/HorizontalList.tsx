import { isEqual } from 'lodash';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { useAppSelector } from '../../Hooks';
import { categoryDataSelector, machineItemList } from '../../Selectors';
import { Alignment } from '../../Theme';
import SubCategoryBoxView from '../SubCategoryBox/SubCategoryBoxView';
import { styles } from './styles';

function HorizontalList({ categoryId }: Pick<ICategoryObj, 'categoryId'>) {
  const categoryData = useAppSelector(state => categoryDataSelector(state, categoryId));
  const itemList = useAppSelector(state => machineItemList(state, categoryId));

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IMachineItem>) => (
      <View style={Alignment.PBmedium}>
        <SubCategoryBoxView key={item.itemId} titleField={categoryData?.titleField ?? ''} {...item} />
      </View>
    ),
    [],
  );

  const keyExtracted = useCallback((item: IMachineItem, index: number) => `HORIZONTAL-AD-${item.itemId}-${index}`, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.flex}
        data={itemList}
        horizontal={true}
        initialNumToRender={5}
        bounces={false}
        contentContainerStyle={styles.flexGrow}
        // showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtracted}
        renderItem={renderItem}
      />
    </View>
  );
}

export default React.memo(HorizontalList, (prevProps, nextProps) => isEqual(prevProps, nextProps));
