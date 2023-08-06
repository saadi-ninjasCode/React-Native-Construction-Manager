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

interface ICategoryObj {
  categoryId: string;
  categoryName: string;
}

interface ICategory extends ICategoryObj {
  titleField: string;
  fieldsArray: IField[];
}

interface ICategoryBox extends ICategory {}
