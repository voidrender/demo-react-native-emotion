import '@emotion/react';
import { Theme as MyTheme } from '../../themes/Theme';

declare module '@emotion/react' {
    // Merge our theme type with the Theme exported from @emotion/react so our
    // styled components' props.theme is typed with our theme type.
    export interface Theme extends MyTheme {}
}
