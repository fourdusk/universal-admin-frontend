export default {
  '*.css': ['stylelint --fix', 'prettier --write'],
  '*.vue': [
    () => 'vue-tsc --noEmit --skipLibCheck',
    'eslint --fix',
    'stylelint --fix',
    'prettier --write'
  ],
  '*.{js,jsx,ts,tsx}': [
    () => 'vue-tsc --noEmit --skipLibCheck',
    'eslint --fix',
    'prettier --write'
  ],
  '*.md': ['prettier --write']
}
