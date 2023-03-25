import 'styled-components';

import { Theme } from 'interfaces/styled';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme { }
}