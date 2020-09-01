// NOTE: The docs say to do it this way for TypeScript support, but TS
// complains that CreateStyled is not generic. Without this, or declaration
// merging, there isn't any type checking on props.theme.x when creating styled
// components.

// https://emotion.sh/docs/typescript#define-a-theme

// import styled from 'emotion-native-extended';
// import { Theme } from './Theme';

// export default styled as CreateStyled<Theme>;
