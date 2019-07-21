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
      <Text testId="footerText">©Auto1 Group 2019</Text>
    </div>
  );
};

export default injectSheet(style)(Footer);
