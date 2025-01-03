import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'

export default definePreset(Aura, {
  semantic: {
    transitionDuration: '300ms',
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}',
    },
    colorScheme: {
      light: {
        surface: {
          950: '#000000',
        },
      },
      dark: {
        surface: {
          900: '#000000',
          950: '#000000',
        },
      },
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          root: {
            primary: {
              color: '#ffffff',
            },
          },
        },
        dark: {
          root: {
            primary: {
              color: '#ffffff',
              hover: {
                color: '#ffffff',
              },
            },
          },
        },
      },
    },
    togglebutton: {
      colorScheme: {
        dark: {
          root: {
            background: '{surface.800}',
            checked: {
              background: '{surface.800}',
            },
            hover: {
              background: '{surface.800}',
            },
          },
          content: {
            background: '{surface.950}',
            checked: {
              background: '{surface.950}',
            },
          },
        },
      },
    },
  },
})
