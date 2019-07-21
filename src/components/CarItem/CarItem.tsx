import React from 'react';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import Text from '../../components/Text';
import Link from '../../components/Link';
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
    const { pictureUrl, stockNumber } = car;

    return (
      <div className={classes.root} data-testid="carItem" data-id={car.stockNumber}>
        <div className={classes.picture} style={{ backgroundImage: `url(${pictureUrl})` }} />
        <div className={classes.content}>
          {this.renderTitle()}
          {this.renderInfo()}
          <Link to={`/cars/${stockNumber}`} textProps={{ size: 's' }}>View details</Link>
        </div>
      </div>
    )
  }
}

export default injectSheet(style)(CarItem);
