import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

export default defineConfig({
  /* 配置项... */
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-ellipsis-1': {
          'overflow': 'hidden',
          'white-space': 'nowrap',
          'text-overflow': 'ellipsis',
        },
        '.text-ellipsis-2': {
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '2',
          'overflow': 'hidden',
        },
        '.text-ellipsis-3': {
          'display': '-webkit-box',
          '-webkit-box-orient': 'vertical',
          '-webkit-line-clamp': '3',
          'overflow': 'hidden',
        },
        '.full': {
          width: '100%',
          height: '100%',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
})
