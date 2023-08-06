import { StyleSheet } from 'react-native';
import { Alignment } from '../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    ...Alignment.PTsmall,
    ...Alignment.PBxLarge,
  },
  sectionHeader: {
    ...Alignment.PHxMedium,
    // paddingLeft: 58,
    // ...Alignment.PRxLarge,
  },
  sectionSeparator: {
    padding: 5,
  },
});

export { styles };
