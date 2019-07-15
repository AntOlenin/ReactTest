import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import theme from '../../theme';
import style from './style';

interface IProps extends ICommonProps {
  size?: 's' | 'm' | 'l' | 'xl';
  bold?: boolean;
}

const Text: React.FC<IProps> = ({ children, classes, size = 'm', bold = false }) => {
  const className = classnames(classes.root, classes[`size-${size}`], {
    [classes.bold]: bold,
  });

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default injectSheet(style as any)(Text);
