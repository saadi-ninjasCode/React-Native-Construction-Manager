import { StyleSheet } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { Alignment } from '../../Theme';

const styles = StyleSheet.create({
  cardView: {
    minWidth: moderateScale(250),
    margin: scale(10),
  },
  card: {
    minWidth: scale(300),
    ...Alignment.Msmall,
  },
  centerAlign: { alignSelf: 'flex-start' },
  addFieldButton: {
    borderRadius: 0,
  },
});

export { styles };
