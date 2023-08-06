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

interface IFieldValue extends IField {
  removeField: Function;
  updateValue: Function;
}

interface ICategoryBox extends ICategory {}

interface ICategorySectionList extends Omit<ICategory, 'fieldsArray'> {
  data: Readonly<IField[]>;
}

interface IInputField extends Pick<IField, 'fieldId'> {
  inputId: string;
  inputType: string;
  inputTitle: string;
  inputValue: string;
}

interface IInputValue extends IInputField {
  updateValue: Function;
}
interface IMachineItem extends Omit<ICategoryObj, 'fieldsArray'> {
  itemId: string;

  itemArray: IInputField[];
}

interface IMachineItemStore {
  [key: string]: IMachineItem[];
}
