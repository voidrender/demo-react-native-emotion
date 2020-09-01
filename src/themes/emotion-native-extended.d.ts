import '@emotion/react';
import { Theme as MyTheme } from './Theme';

declare module '@emotion/react' {
    export interface Theme extends MyTheme {}
}
