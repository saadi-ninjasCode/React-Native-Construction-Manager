import { find, map } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { Button, Card, TextInput, useTheme } from 'react-native-paper';
import { FIELD_TYPES } from '../../Utility';
import { Dropdown } from '../Dropdown';
import { FieldValue } from '../FieldValue';
import { styles } from './styles';

function CategoryBox({
  categoryId,
  categoryName,
  titleField,
  fieldsArray,
  removeCategory,
  addCategoryField,
  updateCategoryName,
  removeCategoryField,
  setCategoryTitleField,
  updateCategoryFieldValue,
}: ICategoryBox) {
  const { colors } = useTheme();

  const addNewField = useCallback(
    (fieldType: FIELD_TYPES) => {
      addCategoryField(categoryId, fieldType);
    },
    [addCategoryField, categoryId],
  );
  const setCategoryTitle = useCallback(
    (fieldName: string) => {
      setCategoryTitleField(categoryId, fieldName);
    },
    [categoryId, setCategoryTitleField],
  );

  const removeField = useCallback(
    (id: string) => () => {
      removeCategoryField(categoryId, id);
    },
    [categoryId, removeCategoryField],
  );

  const updateValue = useCallback(
    (fieldId: string) => (value: string) => {
      updateCategoryFieldValue(categoryId, fieldId, value);
    },
    [categoryId, updateCategoryFieldValue],
  );

  const updateCategoryTitle = useCallback(
    (value: string) => {
      updateCategoryName(categoryId, value);
    },
    [categoryId, updateCategoryName],
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
          onPress={removeCategory(categoryId)}>
          Remove
        </Button>
      </Card.Actions>
    </Card>
  );
}

export default React.memo(CategoryBox);
