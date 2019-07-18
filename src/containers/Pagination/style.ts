import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'baseline',
  },
  item: {
    marginRight: theme.layout.spacing.l,

    '&:last-child': {
      marginRight: 0,
    }
  },
});
