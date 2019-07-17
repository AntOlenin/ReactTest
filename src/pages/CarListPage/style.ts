import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    display: 'flex',
  },
  filterHolder: {
    marginRight: theme.layout.spacing.l,
  },
  listHolder: {
    width: '100%',
  },
  paginationHolder: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.layout.spacing.l,
  }
});
