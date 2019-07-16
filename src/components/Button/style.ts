import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    width: theme.ui.button.width,
    height: theme.ui.button.height,
    cursor: 'pointer',
    background: theme.color.button,
    outline: 'none',
    border: 'none',
    color: theme.color.buttonText,
    padding: 0,
    fontWeight: theme.font.weight,
    fontSize: theme.font.size.m,
    transition: 'background .15s ease-in-out',
    borderRadius: theme.ui.button.borderRadius,

    '&:active': {
      background: theme.color.buttonPressed,
    }
  },
});
