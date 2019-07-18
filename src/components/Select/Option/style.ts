import { Theme } from '../../../theme';

export default (theme: Theme) => {
  return {
    root: {
      width: '100%',
      height: theme.ui.select.height,
      background: theme.color.background,
      borderBottom: `1px solid ${theme.color.border}`,
      cursor: 'pointer',
      transition: 'background .15s ease-in-out',
      padding: `0 ${theme.layout.spacing.m}px`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',

      '&:last-child': {
        borderBottom: 'none',
      },

      '&:hover': {
        background: theme.color.button,
      }
    },
  }
}
