import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import style from './style';

interface IProps extends ICommonProps {
  size?: 's' | 'm' | 'l' | 'xl';
  bold?: boolean;
  block?: boolean;
}

const Text: React.FC<IProps> = ({ children, className, classes, size = 'm', bold = false, block }) => {
  const rootClassName = classnames(classes.root, className && className, classes[`size-${size}`], {
    [classes.bold]: bold,
    [classes.block]: block,
  });

  return (
    <span className={rootClassName}>
      {children}
    </span>
  );
};

export default injectSheet(style)(Text);
