/** @type {import('stylelint').Config} */
const config = {
  overrides: [
    {
      files: ['**/*.{vue,html}'],
      customSyntax: 'postcss-html'
    }
  ],
  plugins: [],
  extends: ['stylelint-config-recess-order'],
  rules: {
    'alpha-value-notation': 'number'
  }
}

export default config
