import { isEqual } from 'lodash';
import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from './styles';

function HorizontalList({ data }: Pick<ICategorySectionList, 'data'>) {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IField>) => (
      <View>
        <Text>{item.fieldValue}</Text>
      </View>
    ),
    [],
  );

  const keyExtracted = useCallback((item: IField, index: number) => `HORIZONTAL-AD-${item.fieldId}-${index}`, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        style={styles.flex}
        data={data}
        horizontal={true}
        initialNumToRender={5}
        bounces={false}
        contentContainerStyle={styles.flexGrow}
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtracted}
        renderItem={renderItem}
      />
    </View>
  );
}

export default React.memo(HorizontalList, (prevProps, nextProps) => isEqual(prevProps, nextProps));
