import { Theme } from '../../theme';

export default (theme: Theme) => {
  const headerAndFooterHeight = theme.layout.footerHeight + theme.layout.headerHeight;

  return {
    content: {
      minHeight: `calc(100vh - ${headerAndFooterHeight}px)`,
      padding: theme.layout.spacing.l,
      boxSizing: 'border-box',
    },
  }
};
