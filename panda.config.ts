import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: false,
  outdir: 'styled',
  include: ['./src/**/*.{vue,js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {}
  }
})
