import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    color: 'inherit',
    fontSize: theme.font.size.xl,
  },

  'size-s': {
    fontSize: theme.font.size.s,
  },

  'size-m': {
    fontSize: theme.font.size.m,
  },

  'size-l': {
    fontSize: theme.font.size.l,
  },

  'size-xl': {
    fontSize: theme.font.size.xl,
  },

  bold: {
    fontWeight: theme.font.weight.bold,
  },

  block: {
    display: 'block',
  }
});
