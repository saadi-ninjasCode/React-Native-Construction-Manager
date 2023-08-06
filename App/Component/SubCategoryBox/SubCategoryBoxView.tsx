/* eslint-disable react-hooks/exhaustive-deps */
import { find, map } from 'lodash';
import React, { useMemo } from 'react';
import { Card } from 'react-native-paper';
import InputFieldView from '../InputField/InputFieldView';
import { styles } from './styles';

function SubCategoryBoxView({ titleField, itemArray }: ISubCategoryBox) {
  const itemFieldArray = useMemo(
    () => map(itemArray, field => <InputFieldView key={field.fieldId} {...field} />),
    [itemArray],
  );

  const ItemTitle = useMemo(
    () => find(itemArray, item => item.fieldId === titleField)?.inputValue,
    [itemArray, titleField],
  );

  return (
    <Card disabled style={styles.cardView}>
      <Card.Title title={ItemTitle || 'Unnamed Field'} titleVariant="titleMedium" />
      <Card.Content>{itemFieldArray}</Card.Content>
    </Card>
  );
}

export default React.memo(SubCategoryBoxView);
