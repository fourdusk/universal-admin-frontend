export default {
  '*.css': ['stylelint --fix', 'prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.md': ['prettier --write']
}
