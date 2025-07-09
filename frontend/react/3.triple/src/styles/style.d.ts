import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      '--color-gray': string;
      '--color-gray800': string;
      '--color-gray700': string;
    };
  }
}
