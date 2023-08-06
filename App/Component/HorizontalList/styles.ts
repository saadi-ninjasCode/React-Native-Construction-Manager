import { StyleSheet } from 'react-native';
import { Alignment } from '../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  mainContainer: {
    flexShrink: 1,
    minHeight: 283,
    ...Alignment.PLsmall,
    ...Alignment.PVxSmall,
  },
});

export { styles };
