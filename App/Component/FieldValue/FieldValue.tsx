import React from 'react';
import { View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { Alignment } from '../../Theme';
import { Dropdown } from '../Dropdown';
import { styles } from './styles';

interface IFieldValue extends IField {
  removeField: Function;
  updateValue: Function;
}

function FieldValue({ fieldId, fieldType, fieldValue, removeField, updateValue }: IFieldValue) {
  return (
    <View style={[styles.row, Alignment.MTxSmall]}>
      <TextInput
        style={styles.flexGrow}
        dense
        defaultValue={fieldValue}
        mode="outlined"
        label="Field"
        value={fieldValue}
        onChangeText={updateValue(fieldId)}
      />
      <Dropdown selectedValue={fieldType} />
      <IconButton icon="trash-can-outline" size={20} onPress={removeField(fieldId)} />
    </View>
  );
}
export default React.memo(FieldValue);
