interface IField {
  fieldId: string;
  fieldType: FIELD_TYPES;
  fieldValue: string;
}

interface IDropdown {
  selectedValue: string;
  addFieldView?: boolean;
  onChange: Function;
  optionArray?: {
    optionId: string;
    option: string;
  }[];
}

interface ICategory {
  categoryId: string;
  categoryName: string;
  titleField: string;
  fieldsArray: IField[];
}

interface ICategoryBox extends ICategory {
  addCategoryField: (categoryId: string, fieldType: FIELD_TYPES) => void;
  removeCategory: (id: string) => () => void;
  removeCategoryField: (categoryId: string, fieldId: string) => void;
  updateCategoryName: (id: string, value: string) => void;
  setCategoryTitleField: (categoryId: string, fieldName: string) => void;
  updateCategoryFieldValue: (categoryId: string, fieldId: string, value: string) => void;
}
