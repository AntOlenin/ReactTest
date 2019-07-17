import { Theme } from '../../theme';

export default (theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 140,
  },
  text: {
    marginTop: theme.layout.spacing.l,
  }
});
