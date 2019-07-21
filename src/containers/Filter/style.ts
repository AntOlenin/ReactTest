import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    border: `1px solid ${theme.color.border}`,
    width: theme.layout.spacing.l * 2 + theme.ui.select.width,
    padding: theme.layout.spacing.l,
    boxSizing: 'border-box',
    position: 'sticky',
    top: theme.layout.headerHeight + theme.layout.spacing.l,
  },
  manufacturer: {
    marginTop: theme.layout.spacing.s,
  },
  actions: {
    marginTop: theme.layout.spacing.l,
    display: 'flex',
    justifyContent: 'flex-end',
  }
});
