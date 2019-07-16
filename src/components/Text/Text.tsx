import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import style from './style';

interface IProps extends ICommonProps {
  size?: 's' | 'm' | 'l' | 'xl';
  bold?: boolean;
}

const Text: React.FC<IProps> = ({ children, className, classes, size = 'm', bold = false }) => {
  const rootClassName = classnames(classes.root, className && className, classes[`size-${size}`], {
    [classes.bold]: bold,
  });

  return (
    <span className={rootClassName}>
      {children}
    </span>
  );
};

export default injectSheet(style as any)(Text);
