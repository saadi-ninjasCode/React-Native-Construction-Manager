import React, { useCallback } from 'react';
import { SectionList, SectionListData, SectionListRenderItemInfo, View } from 'react-native';
import { Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HorizontalList } from '../../Component';
import { useAppSelector } from '../../Hooks';
import { categoryDataSections } from '../../Selectors';
import { styles } from './styles';

function Dashboard() {
  const categoryList = useAppSelector(categoryDataSections);

  const renderSectionHeader = useCallback(
    ({ section: { title } }: { section: SectionListData<string, ICategorySectionList> }) => {
      if (title) {
        return (
          <View style={styles.sectionHeader}>
            <Text variant="titleLarge">{title}</Text>
          </View>
        );
      }
      return null;
    },
    [],
  );

  const keyExtracted = useCallback((item: string) => item, []);
  const SectionSeparatorComponent = useCallback(() => <View style={styles.sectionSeparator} />, []);
  const renderItem = useCallback(({ item }: SectionListRenderItemInfo<string>) => {
    return <HorizontalList categoryId={item} />;
  }, []);

  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.flex}>
      <SectionList
        sections={categoryList}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderItem}
        stickyHeaderHiddenOnScroll={true}
        SectionSeparatorComponent={SectionSeparatorComponent}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtracted}
      />
    </SafeAreaView>
  );
}

export default React.memo(Dashboard);
