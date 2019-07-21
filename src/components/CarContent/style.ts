import { Theme } from '../../theme';

export default (theme: Theme) => ({
  cover: {
    width: '100%',
    height: 300,
    background: theme.color.placeholder,
    backgroundSize: 'cover',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: theme.layout.spacing.l,
  },
  description: {
    marginRight: theme.layout.spacing.l,
    width: 420,
  },
  saveBlock: {
    border: `1px solid ${theme.color.border}`,
    padding: theme.layout.spacing.l,
    width: 240,
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  text: {
    marginTop: theme.layout.spacing.l,
  }
});
