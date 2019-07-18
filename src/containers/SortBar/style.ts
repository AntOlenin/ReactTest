import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  meta: {
    marginRight: theme.layout.spacing.l,
  },
  metaResults: {
    marginTop: theme.layout.spacing.m,
  }
});
