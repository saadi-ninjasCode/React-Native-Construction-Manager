/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';

function MachineItem() {
  const navigation = useNavigation<IMachineDrawerProp>();
  const routes = useRoute<IMachineRouteProp>();
  const categoryName = routes?.params?.categoryName ?? '';

  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryName,
    });
  }, [categoryName]);

  return null;
}

export default React.memo(MachineItem);
