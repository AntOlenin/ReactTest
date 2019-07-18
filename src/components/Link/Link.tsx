import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import Text from '../Text';
import { IProps as ITextProps } from '../Text/Text';
import style from './style';

interface IProps extends ICommonProps, LinkProps, ITextProps {
  className?: string;
  textProps?: ITextProps;
  disabled?: boolean;
}

class Link extends React.PureComponent<IProps> {
  render() {
    const { classes, textProps = {}, disabled, className, children, ...props } = this.props;

    if (disabled) {
      return <Text {...textProps} className={className}>{children}</Text>
    }

    const rootClassName = classnames(classes.root, className && className);
    return (
      <RouterLink className={rootClassName} {...props}>
        <Text {...textProps}>{children}</Text>
      </RouterLink>
    )
  }
}

export default injectSheet(style)(Link);
