import { Theme } from '../../../theme';

export default (theme: Theme) => ({
  root: {
    height: theme.layout.footerHeight,
    borderBottom: `1px solid ${theme.color.placeholder}`,
    boxSizing: 'border-box',
    padding: theme.layout.spacing.l,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    width: 170,
    height: 36,
  },
  menuItem: {
    marginRight: theme.layout.spacing.l,

    '&:last-child': {
      marginRight: 0,
    }
  }
});
