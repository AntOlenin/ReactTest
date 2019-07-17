import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    width: '100%',
  },
  item: {
    marginBottom: theme.layout.spacing.m,

    '&:last-child': {
      marginBottom: 0,
    }
  }
});
