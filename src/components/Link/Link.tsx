import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import Text from '../Text';
import { IProps as ITextProps } from '../Text/Text';
import style from './style';

type Color = 'primary' | 'link';
interface IProps extends ICommonProps, LinkProps, ITextProps {
  className?: string;
  textProps?: ITextProps;
  disabled?: boolean;
  color?: Color;
}

class Link extends React.PureComponent<IProps> {
  static defaultProps = {
    color: 'link' as Color,
  };

  render() {
    const { classes, color, textProps = {}, disabled, className, children, ...props } = this.props;

    if (disabled) {
      return <Text {...textProps} className={className}>{children}</Text>
    }

    const rootClassName = classnames(classes.root, className && className, {
      [classes.colorPrimary]: color === 'primary',
      [classes.colorLink]: color === 'link',
    });

    return (
      <RouterLink className={rootClassName} {...props}>
        <Text {...textProps}>{children}</Text>
      </RouterLink>
    )
  }
}

export default injectSheet(style)(Link);
