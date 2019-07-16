import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../../theme';
import Text from '../../../components/Text';
import style from './style';

interface IProps {
  classes: Classes;
}

const Footer: React.FC<IProps> = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Text>© AUTO1 Group 2018</Text>
    </div>
  );
};

export default injectSheet(style as any)(Footer);
