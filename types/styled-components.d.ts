import 'styled-components';
import { color } from '../styles/theme';

declare module 'styled-component' {
  export interface DefaultTheme {
    color: { [key in Color]: string };
  }
}
