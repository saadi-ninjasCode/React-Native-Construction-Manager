import React, { useCallback } from 'react';
import { Button, Card, useTheme } from 'react-native-paper';
import { useAppDispatch } from '../../Hooks';
import { MachineItemSliceAction } from '../../RTK';
import { styles } from './styles';

function SubCategoryBox({ ...machineItem }: IMachineItem) {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const removeMachineItem = useCallback(() => {
    dispatch(
      MachineItemSliceAction.removeMachineItem({ categoryId: machineItem?.categoryId, itemId: machineItem.itemId }),
    );
  }, [dispatch, machineItem?.categoryId, machineItem.itemId]);

  return (
    <Card disabled style={styles.card}>
      <Card.Title title={'Unnamed Field'} titleVariant="titleMedium" />
      <Card.Content>
        {/* <InputField /> */}
        {/* {boxArray} */}
      </Card.Content>
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
