import { Theme } from '../../theme';

export default (theme: Theme) => {
  const headerAndFooterHeight = theme.layout.footerHeight + theme.layout.headerHeight;

  return {
    root: {
      color: theme.color.primary,
    },
    content: {
      minHeight: `calc(100vh - ${headerAndFooterHeight}px)`,
      padding: theme.layout.spacing.l,
      boxSizing: 'border-box',
    },
  }
};
