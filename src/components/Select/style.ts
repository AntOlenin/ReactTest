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

    },
    select: {
      width: theme.ui.select.width,
      height: theme.ui.select.height,
      position: 'relative',
      marginTop: theme.layout.spacing.s,
      borderRadius: theme.ui.select.borderRadius,
      border: `1px solid ${theme.color.border}`,
      background: theme.color.background,
      padding: `0 ${theme.layout.spacing.m}px`,
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',

      '&::after': {
        ...selectHandler,
        borderWidth: '7px 6px 0 6px',
        borderColor: `${theme.color.placeholder} transparent transparent transparent`,
      },
    },
    nativeSelect: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: '100%',
      zIndex: theme.zIndexes.overlay,
      opacity: 0,
      cursor: 'pointer',
    }
  }
}
