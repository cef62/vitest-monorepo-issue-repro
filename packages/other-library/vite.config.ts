/* eslint-disable import/no-default-export */

import { defineConfig } from 'vite'
import { type UserConfig } from 'vitest/config'

export default defineConfig(() => {
  return {
    clearScreen: true,

    test: {
      watch: false,
      globals: false,
      reporters: 'default',
      include: ['src/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      deps: {
        inline: [/\/packages\/.*\/esm\/(.*\.js)$/],
      },
    },
  } as UserConfig
})
