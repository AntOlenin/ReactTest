import { Theme } from '../../theme';

export default (theme: Theme) => {
  const selectHandler = {
    right: theme.layout.spacing.m,
    top: theme.layout.spacing.m,
    content: '""',
    position: 'absolute',
    width: 0,
    height: 0,
    borderStyle: 'solid',
  };

  return {
    root: {
      width: theme.ui.select.width,
      height: theme.ui.select.height,
      position: 'relative',
    },
    select: {
      width: '100%',
      height: '100%',
      marginTop: theme.layout.spacing.s,
      borderRadius: theme.ui.select.borderRadius,
      border: `1px solid ${theme.color.border}`,
      background: theme.color.background,
      cursor: 'pointer',
      padding: `0 ${theme.layout.spacing.m}px`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',

      '&$collapsed': {
        '&::after': {
          ...selectHandler,
          borderWidth: '7px 6px 0 6px',
          borderColor: `${theme.color.placeholder} transparent transparent transparent`,
        },
      },

      '&$expanded': {
        '&::after': {
          ...selectHandler,
          borderWidth: '0 6px 7px 6px',
          borderColor: `transparent transparent ${theme.color.placeholder} transparent`,
        },
      }
    },
    options: {
      width: '100%',
      position: 'absolute',
      top: theme.ui.select.height + theme.layout.spacing.m,
      left: 0,
      borderRadius: theme.ui.select.borderRadius,
      border: `1px solid ${theme.color.border}`,
      boxSizing: 'border-box',
    },
    option: {
      width: '100%',
      height: theme.ui.select.height,
      background: theme.color.background,
      borderBottom: `1px solid ${theme.color.border}`,
      cursor: 'pointer',
      transition: 'background .15s ease-in-out',
      padding: `0 ${theme.layout.spacing.m}px`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',

      '&:last-child': {
        borderBottom: 'none',
      },

      '&:hover': {
        background: theme.color.button,
      }
    },

    collapsed: {},
    expanded: {},
  }
}
