import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    display: 'flex',
  },
  item: {
    marginRight: theme.layout.spacing.l,

    '&:last-child': {
      marginRight: 0,
    }
  },
  link: {
    fontSize: theme.font.size.s,
    color: theme.color.button,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'underline',
    }
  }
});
