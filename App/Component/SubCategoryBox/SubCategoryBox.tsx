import React, { useCallback, useMemo } from 'react';
import { Button, Card, useTheme } from 'react-native-paper';
import { useAppDispatch } from '../../Hooks';
import { MachineItemSliceAction } from '../../RTK';
import { styles } from './styles';
import { map } from 'lodash';
import { InputField } from '../InputField';

function SubCategoryBox({ categoryId, itemId, itemArray }: IMachineItem) {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const removeMachineItem = useCallback(() => {
    dispatch(MachineItemSliceAction.removeMachineItem({ categoryId: categoryId, itemId: itemId }));
  }, [dispatch, categoryId, itemId]);

  const updateInputValue = useCallback(
    (categoryId: string, itemId: string, inputId: string) => (value: string) => {
      // dispatch(CategorySliceAction.updateCategoryFieldValue({ categoryId, fieldId, value }));
    },
    [categoryId],
  );

  const itemFieldArray = useMemo(
    () => map(itemArray, field => <InputField key={field.fieldId} {...field} updateValue={updateInputValue} />),
    [itemArray, updateInputValue],
  );

  return (
    <Card disabled style={styles.card}>
      <Card.Title title={'Unnamed Field'} titleVariant="titleMedium" />
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
