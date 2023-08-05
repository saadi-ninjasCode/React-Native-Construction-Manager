module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 0,
    'react-hooks/exhaustive-deps': 1,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native-gesture-handler',
            importNames: [
              'TouchableOpacity',
              'TouchableNativeFeedback',
              'TouchableHighlight',
              'TouchableWithoutFeedback',
            ],
            message: "Please import it from 'react-native' instead.",
          },
        ],
      },
    ],
  },
};
