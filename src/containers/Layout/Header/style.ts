import { Theme } from '../../../theme';

export default (theme: Theme) => ({
  root: {
    height: theme.layout.footerHeight,
    borderBottom: `1px solid ${theme.color.placeholder}`,
    background: theme.color.background,
    position: 'sticky',
    top: 0,
    boxSizing: 'border-box',
    padding: theme.layout.spacing.l,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: theme.zIndexes.header,
  },
  menuItem: {
    marginRight: theme.layout.spacing.l,

    '&:last-child': {
      marginRight: 0,
    }
  }
});
