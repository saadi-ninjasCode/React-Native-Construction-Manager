/* eslint-disable react-hooks/exhaustive-deps */
import { find, map } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { Button, Card, TextInput, useTheme } from 'react-native-paper';
import { FIELD_TYPES } from '../../Utility';
import { Dropdown } from '../Dropdown';
import { FieldValue } from '../FieldValue';
import { styles } from './styles';
import { useAppDispatch } from '../../Hooks';
import { CategorySliceAction } from '../../RTK';

function CategoryBox({ categoryId, categoryName, titleField, fieldsArray }: ICategoryBox) {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();

  const addNewField = useCallback(
    (fieldType: FIELD_TYPES) => {
      dispatch(CategorySliceAction.addCategoryField({ categoryId, fieldType }));
    },
    [categoryId],
  );
  const setCategoryTitle = useCallback(
    (fieldName: string) => {
      dispatch(CategorySliceAction.setCategoryTitleField({ categoryId, fieldName }));
    },
    [categoryId],
  );

  const removeField = useCallback(
    (fieldId: string) => () => {
      dispatch(CategorySliceAction.removeCategoryField({ categoryId, fieldId }));
    },
    [categoryId],
  );

  const updateValue = useCallback(
    (fieldId: string) => (value: string) => {
      dispatch(CategorySliceAction.updateCategoryFieldValue({ categoryId, fieldId, value }));
    },
    [categoryId],
  );

  const removeCategory = useCallback(() => {
    dispatch(CategorySliceAction.removeCategory(categoryId));
  }, [categoryId]);

  const updateCategoryTitle = useCallback(
    (categoryName: string) => {
      dispatch(CategorySliceAction.updateCategoryName({ categoryId, categoryName }));
    },
    [categoryId],
  );

  const boxArray = useMemo(
    () =>
      map(fieldsArray, field => (
        <FieldValue key={field.fieldId} {...field} removeField={removeField} updateValue={updateValue} />
      )),
    [fieldsArray, removeField, updateValue],
  );

  const titleDropdownOptions = useMemo(
    () => map(fieldsArray, field => ({ optionId: field.fieldId, option: field.fieldValue })),
    [fieldsArray],
  );

  const categoryTitleName = useMemo(() => {
    const fieldObj = find(fieldsArray, { fieldId: titleField });
    return fieldObj?.fieldValue ?? '-';
  }, [fieldsArray, titleField]);

  return (
    <Card disabled style={styles.card}>
      <Card.Title title={categoryName || 'Category Name'} titleVariant="titleLarge" />
      <Card.Content>
        <TextInput dense mode="outlined" label="Category name" onChangeText={updateCategoryTitle} />
        {boxArray}
        <Dropdown
          addFieldView
          selectedValue={categoryTitleName}
          optionArray={titleDropdownOptions}
          onChange={setCategoryTitle}
        />
      </Card.Content>
      <Card.Actions style={styles.centerAlign}>
        <Dropdown addFieldView onChange={addNewField} />
        <Button
          icon="trash-can-outline"
          mode="text"
          textColor={colors.error}
          style={styles.addFieldButton}
          onPress={removeCategory}>
          Remove
        </Button>
      </Card.Actions>
    </Card>
  );
}

export default React.memo(CategoryBox);
