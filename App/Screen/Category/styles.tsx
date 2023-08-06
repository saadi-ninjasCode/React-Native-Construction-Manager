import { StyleSheet } from 'react-native';
import { Alignment } from '../../Theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexGrow: {
    flexGrow: 1,
  },
  addBtn: {
    borderRadius: 0,
  },
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    ...Alignment.MBxLarge,
  },
});

export { styles };
