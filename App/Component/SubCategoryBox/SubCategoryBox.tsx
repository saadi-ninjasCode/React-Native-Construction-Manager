/* eslint-disable react-hooks/exhaustive-deps */
import { find, map } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { Button, Card, useTheme } from 'react-native-paper';
import { useAppDispatch } from '../../Hooks';
import { MachineItemSliceAction } from '../../RTK';
import { InputField } from '../InputField';
import { styles } from './styles';

function SubCategoryBox({ categoryId, titleField, itemId, itemArray }: ISubCategoryBox) {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const removeMachineItem = useCallback(() => {
    dispatch(MachineItemSliceAction.removeMachineItem({ categoryId: categoryId, itemId: itemId }));
  }, [dispatch, categoryId, itemId]);

  const updateInputValue = useCallback(
    (inputId: string) => (value: string) => {
      dispatch(MachineItemSliceAction.updateMachineItemInputValue({ categoryId, itemId, inputId, value }));
    },
    [categoryId, itemId],
  );

  const itemFieldArray = useMemo(
    () => map(itemArray, field => <InputField key={field.fieldId} {...field} updateValue={updateInputValue} />),
    [itemArray, updateInputValue],
  );

  const ItemTitle = useMemo(
    () => find(itemArray, item => item.fieldId === titleField)?.inputValue,
    [itemArray, titleField],
  );

  return (
    <Card disabled style={styles.card}>
      <Card.Title title={ItemTitle || 'Unnamed Field'} titleVariant="titleMedium" />
      <Card.Content>{itemFieldArray}</Card.Content>
      <Card.Actions style={styles.centerAlign}>
        <Button
          icon="trash-can-outline"
          mode="text"
          textColor={colors.error}
          style={styles.addFieldButton}
          onPress={removeMachineItem}>
          Remove
        </Button>
      </Card.Actions>
    </Card>
  );
}

export default React.memo(SubCategoryBox);
