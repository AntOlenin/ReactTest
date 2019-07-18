import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import { Classes } from '../../theme';
import Text from '../../components/Text';
import { ICar } from '../../types';
import { getCarInfo, getCarTitle } from '../../helpers/car';
import style from './style';

interface IProps {
  classes: Classes;
  car: ICar;
}

class CarItem extends React.PureComponent<IProps> {
  renderTitle() {
    const { classes, car } = this.props;
    const title = getCarTitle(car);
    return <Text block bold size="l" className={classes.text}>{title}</Text>;
  }

  renderInfo() {
    const { classes, car } = this.props;
    const info = getCarInfo(car);
    return <Text block size="s" className={classes.text}>{info}</Text>;
  }

  render() {
    const { classes, car } = this.props;
    const { pictureUrl, manufacturerName, stockNumber } = car;

    return (
      <div className={classes.root}>
        <div className={classes.picture}>
          <img src={pictureUrl} alt={manufacturerName}/>
        </div>
        <div className={classes.content}>
          {this.renderTitle()}
          {this.renderInfo()}
          <Link to={`/cars/${stockNumber}`} className={classes.link}>View details</Link>
        </div>
      </div>
    )
  }
}

export default injectSheet(style as any)(CarItem);
