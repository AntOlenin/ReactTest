import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    color: theme.color.button,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    }
  }
});
