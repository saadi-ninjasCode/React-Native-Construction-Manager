/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef } from 'react';
import { View } from 'react-native';
import { Switch, Text, TextInput } from 'react-native-paper';
import { Alignment } from '../../Theme';
import { FIELD_TYPES } from '../../Utility';
import { styles } from './styles';

function InputFieldView({ inputId, inputType, inputTitle, inputValue }: Omit<IInputValue, 'updateValue'>) {
  const dateRef = useRef<Date>(new Date());

  useEffect(() => {
    if (inputType === FIELD_TYPES.DATE) {
      if (inputValue) {
        dateRef.current = new Date(inputValue);
      }
    }
  }, []);

  const fieldView = useMemo(() => {
    switch (inputType) {
      case FIELD_TYPES.TEXT:
      case FIELD_TYPES.NUMBER:
      case FIELD_TYPES.DATE:
        return (
          <TextInput
            key={inputId}
            dense
            editable={false}
            mode="outlined"
            label={inputTitle}
            value={inputValue}
            style={styles.flexGrow}
          />
        );

      case FIELD_TYPES.CHECKBOX:
        return (
          <>
            <Switch key={inputId} value={Boolean(inputValue)} disabled />
            <Text style={Alignment.MLmedium}>{inputTitle}</Text>
          </>
        );
      default:
        break;
    }
  }, [inputId, inputTitle, inputType, inputValue]);

  return <View style={[styles.row, Alignment.MTxSmall]}>{fieldView}</View>;
}
export default React.memo(InputFieldView);
