import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  filterHolder: {
    marginRight: theme.layout.spacing.l,
  },
  listHolder: {
    width: '100%',
    maxWidth: 800,
  },
  paginationHolder: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.layout.spacing.l,
  },
  sortBarHolder: {
    marginBottom: theme.layout.spacing.l,
  }
});
