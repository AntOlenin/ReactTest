import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    display: 'flex',
    border: `1px solid ${theme.color.border}`,
    padding: theme.layout.spacing.m,
  },
  picture: {
    marginRight: theme.layout.spacing.l,
    backgroundSize: 'cover',
    // background: theme.color.placeholder,
    width: 90,
    height: 70,
  },
  content: {

  },
  text: {
    marginBottom: theme.layout.spacing.s,
  },
});
