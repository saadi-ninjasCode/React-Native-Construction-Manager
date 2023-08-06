import { StyleSheet } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Alignment } from '../../Theme';

const styles = StyleSheet.create({
  card: {
    minWidth: scale(300),
    ...Alignment.Msmall,
  },
  centerAlign: { alignSelf: 'center' },
  addFieldButton: {
    borderRadius: 0,
  },
});

export { styles };
