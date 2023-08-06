import { filter, forEach, map, uniqueId } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CategoryBox } from '../../Component';
import { FIELD_TYPES } from '../../Utility';
import { styles } from './styles';

function Category() {
  const [categoryArray, setCategoryArray] = useState<ICategory[]>([
    {
      categoryId: uniqueId('category_'),
      categoryName: '',
      titleField: '-',
      fieldsArray: [
        {
          fieldId: '1',
          fieldType: FIELD_TYPES.TEXT,
          fieldValue: '',
        },
      ],
    },
  ]);

  const setCategoryTitleField = useCallback((categoryId: string, fieldName: string) => {
    setCategoryArray(prev => {
      const newArr: ICategory[] = [];
      forEach(prev, categoryObj => {
        if (categoryObj.categoryId === categoryId) {
          categoryObj.titleField = fieldName;
        }
        newArr.push(categoryObj);
      });
      return newArr;
    });
  }, []);

  const addCategoryField = useCallback((categoryId: string, fieldType: FIELD_TYPES) => {
    setCategoryArray(prev => {
      const newArr: ICategory[] = [];
      forEach(prev, categoryObj => {
        if (categoryObj.categoryId === categoryId) {
          categoryObj.fieldsArray = [
            ...categoryObj.fieldsArray,
            {
              fieldId: uniqueId(`${categoryId}_field_`),
              fieldType: fieldType,
              fieldValue: '',
            },
          ];
        }
        newArr.push(categoryObj);
      });
      return newArr;
    });
  }, []);

  const updateCategoryFieldValue = useCallback((categoryId: string, fieldId: string, value: string) => {
    setCategoryArray(prev => {
      const newArr: ICategory[] = [];
      forEach(prev, categoryObj => {
        if (categoryObj.categoryId === categoryId) {
          const newFieldArr: IField[] = [];
          forEach(categoryObj?.fieldsArray, fieldObj => {
            console.tron.warn?.({ fieldId });
            if (fieldObj.fieldId === fieldId) {
              fieldObj.fieldValue = value;
            }
            newFieldArr.push(fieldObj);
          });
          categoryObj.fieldsArray = newFieldArr;
        }
        newArr.push(categoryObj);
      });
      return newArr;
    });
  }, []);

  const removeCategoryField = useCallback((categoryId: string, fieldId: string) => {
    setCategoryArray(prev => {
      const newArr: ICategory[] = [];
      forEach(prev, categoryObj => {
        if (categoryObj.categoryId === categoryId) {
          categoryObj.fieldsArray = filter(categoryObj.fieldsArray, field => field.fieldId !== fieldId);
        }
        newArr.push(categoryObj);
      });
      return newArr;
    });
  }, []);

  const addNewCategory = useCallback(() => {
    setCategoryArray(prev => [
      ...prev,
      {
        categoryId: uniqueId('category_'),
        categoryName: '',
        fieldsArray: [
          {
            fieldId: uniqueId(`field_`),
            fieldType: FIELD_TYPES.TEXT,
            fieldValue: '',
          },
        ],
      },
    ]);
  }, []);

  const removeCategory = useCallback(
    (id: string) => () => {
      setCategoryArray(prev => filter(prev, category => category.categoryId !== id));
    },
    [],
  );

  const updateCategoryName = useCallback((id: string, categoryName: string) => {
    setCategoryArray(prev => {
      const newArr: ICategory[] = [];
      forEach(prev, categoryObj => {
        if (categoryObj.categoryId === id) {
          categoryObj.categoryName = categoryName;
        }
        newArr.push(categoryObj);
      });
      return newArr;
    });
  }, []);

  const renderCategory = useMemo(
    () =>
      map(categoryArray, category => (
        <CategoryBox
          key={category.categoryId}
          {...category}
          removeCategory={removeCategory}
          addCategoryField={addCategoryField}
          updateCategoryName={updateCategoryName}
          removeCategoryField={removeCategoryField}
          setCategoryTitleField={setCategoryTitleField}
          updateCategoryFieldValue={updateCategoryFieldValue}
        />
      )),
    [
      categoryArray,
      removeCategory,
      addCategoryField,
      removeCategoryField,
      updateCategoryName,
      setCategoryTitleField,
      updateCategoryFieldValue,
    ],
  );

  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flexGrow, styles.boxContainer]}>{renderCategory}</View>
      <Button style={styles.addBtn} mode="contained" onPress={addNewCategory}>
        Add Category
      </Button>
    </SafeAreaView>
  );
}

export default React.memo(Category);
