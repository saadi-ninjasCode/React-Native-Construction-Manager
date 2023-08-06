import React, { useCallback, useMemo, useState } from 'react';
import { Button, Menu } from 'react-native-paper';
import { styles } from './styles';
import { FIELD_TYPES } from '../../Utility';
import { map } from 'lodash';

function Dropdown({
  addFieldView = false,
  selectedValue = FIELD_TYPES.TEXT,
  onChange,
  optionArray,
}: Partial<IDropdown>) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = useCallback(() => setVisible(false), []);
  const selection = useCallback((fieldType: FIELD_TYPES | string) => {
    onChange?.(fieldType);
    closeMenu();
  }, []);

  const anchorView = useMemo(() => {
    if (optionArray) {
      return (
        <Button mode="contained" style={styles.dropdownBtn} onPress={openMenu}>
          {`Title Field: ${selectedValue}`}
        </Button>
      );
    } else if (addFieldView) {
      return (
        <Button icon="plus" mode="contained-tonal" style={styles.dropdownBtn} onPress={openMenu}>
          Add new field
        </Button>
      );
    }
    return (
      <Button mode="elevated" style={[styles.dropdownBtn]} onPress={openMenu}>
        {selectedValue}
      </Button>
    );
  }, [addFieldView, optionArray, selectedValue]);

  console.tron.warn?.({ optionArray });

  const dropdownList = useMemo(() => {
    if (optionArray) {
      return map(optionArray, option => {
        return <Menu.Item key={option.optionId} onPress={() => selection(option.optionId)} title={option.option} />;
      });
    }
    return map(optionArray || FIELD_TYPES, (value, key) => {
      return <Menu.Item key={key} onPress={() => selection(value)} title={value} />;
    });
  }, [selection, optionArray]);

  return (
    <Menu visible={visible} onDismiss={closeMenu} anchor={anchorView} anchorPosition="bottom">
      {dropdownList}
    </Menu>
  );
}

export default React.memo(Dropdown);
