import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    }
  },
  colorPrimary: {
    color: theme.color.primary,
  },
  colorLink: {
    color: theme.color.button,
  }
});
