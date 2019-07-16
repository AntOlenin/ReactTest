import { Theme } from '../../../theme';

export default (theme: Theme) => ({
  root: {
    height: theme.layout.footerHeight,
    borderTop: `1px solid ${theme.color.placeholder}`,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
