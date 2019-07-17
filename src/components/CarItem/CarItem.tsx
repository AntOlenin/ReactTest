import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Classes } from '../../theme';
import Text from '../../components/Text';
import { ICar } from '../../types';
import style from './style';

interface IProps {
  classes: Classes;
  car: ICar;
}

class CarItem extends React.PureComponent<IProps> {
  renderTitle() {
    const { classes, car: { manufacturerName, modelName } } = this.props;
    const title = `${manufacturerName} ${modelName}`;

    return <Text block bold size="l" className={classes.text}>{title}</Text>;
  }

  renderInfo() {
    const { classes, car } = this.props;
    const { stockNumber, mileage: { number, unit }, fuelType, color, pictureUrl } = car;
    const info = `Stock # ${stockNumber} - ${number} ${unit} - ${fuelType} - ${color}`;

    return <Text block size="s" className={classes.text}>{info}</Text>;
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.picture}>
          <img src="/images/car.svg" alt=""/>
        </div>
        <div className={classes.content}>
          {this.renderTitle()}
          {this.renderInfo()}
          <Link to="#" className={classes.link}>View details</Link>
        </div>
      </div>
    )
  }
}

export default injectSheet(style as any)(CarItem);
