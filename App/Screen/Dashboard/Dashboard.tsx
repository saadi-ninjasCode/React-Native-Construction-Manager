import React, { useCallback } from 'react';
import { SectionList, SectionListData, SectionListRenderItemInfo, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HorizontalList } from '../../Component';
import { useAppSelector } from '../../Hooks';
import { categoryDataSections } from '../../Selectors';
import { styles } from './styles';

function Dashboard() {
  const abc = useAppSelector(categoryDataSections);
  const renderSectionHeader = useCallback(
    ({ section: { categoryName } }: { section: SectionListData<IField, ICategorySectionList> }) => {
      if (categoryName) {
        return (
          <View style={styles.sectionHeader}>
            <Text variant="titleLarge">{categoryName}</Text>
          </View>
        );
      }
      return null;
    },
    [],
  );

  const keyExtracted = useCallback((item: IField) => item.fieldId, []);
  const SectionSeparatorComponent = useCallback(() => <View style={styles.sectionSeparator} />, []);
  const renderItem = useCallback(
    // ({ section: { data } }: SectionListRenderItemInfo<IField>) => <HorizontalList data={data} />,
    ({ section: { data } }: SectionListRenderItemInfo<IField>) => null,
    [],
  );

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.flex}>
      <SectionList
        sections={abc}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        SectionSeparatorComponent={SectionSeparatorComponent}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtracted}
      />
    </SafeAreaView>
  );
}

export default React.memo(Dashboard);
