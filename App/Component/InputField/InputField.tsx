import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useMemo, useRef } from 'react';
import { View } from 'react-native';
import { Switch, Text, TextInput } from 'react-native-paper';
import { Alignment } from '../../Theme';
import { FIELD_TYPES } from '../../Utility';
import { styles } from './styles';

function InputField({ fieldId, inputId, inputType, inputTitle, inputValue, updateValue }: IInputValue) {
  const dateRef = useRef<Date>(new Date());

  const fieldView = useMemo(() => {
    switch (inputType) {
      case FIELD_TYPES.TEXT:
      case FIELD_TYPES.NUMBER:
        return (
          <TextInput
            key={inputId}
            dense
            mode="outlined"
            label={inputTitle}
            value={inputValue}
            style={styles.flexGrow}
            keyboardType={FIELD_TYPES.NUMBER ? 'number-pad' : 'ascii-capable'}
            // defaultValue={categoryTitleName}
            // onChangeText={updateCategoryTitle}
          />
        );

      case FIELD_TYPES.CHECKBOX:
        return (
          <>
            <Switch key={inputId} value={Boolean(inputValue)} />
            <Text style={Alignment.MLmedium}>{inputTitle}</Text>
          </>
        );
      case FIELD_TYPES.DATE:
        return (
          <View key={inputId} style={Alignment.MVxSmall}>
            <Text variant="bodyMedium" style={Alignment.MLxSmall}>
              {'Manufac Date'}
            </Text>
            <DateTimePicker
              testID="dateTimePicker"
              mode={'date'}
              value={dateRef.current}
              maximumDate={new Date()}
              minimumDate={new Date(1930, 0, 1)}
              is24Hour={true}
              display="calendar"
              style={{ marginLeft: -5 }}
              // onChange={androidOnChange}
            />
          </View>
        );
      default:
        break;
    }
  }, [inputId, inputTitle, inputType, inputValue]);

  return <View style={[styles.row, Alignment.MTxSmall]}>{fieldView}</View>;
}
export default React.memo(InputField);
