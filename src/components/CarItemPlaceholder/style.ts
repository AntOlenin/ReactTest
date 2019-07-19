import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    display: 'flex',
    border: `1px solid ${theme.color.border}`,
    padding: theme.layout.spacing.m,
  },
  picture: {
    marginRight: theme.layout.spacing.l,
    background: theme.color.placeholder,
    width: 90,
    height: 70,
  },
  content: {

  },
  title: {
    background: theme.color.placeholder,
    marginBottom: theme.layout.spacing.s / 2,
    height: 30,
    width: 250,
  },
  info: {
    background: theme.color.placeholder,
    marginBottom: theme.layout.spacing.s,
    height: 14,
    width: 250,
  },
  link: {
    background: theme.color.placeholder,
    height: 14,
    width: 50,
  }
});
