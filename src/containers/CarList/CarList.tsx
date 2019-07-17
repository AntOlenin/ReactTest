import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import CarItem from '../../components/CarItem';
import { Classes } from '../../theme';
import { ICar, ReduxState } from '../../types';
import style from './style';

interface IProps {
  classes: Classes;
  dispatch: any;
  cars?: Array<ICar>;
}

class CarList extends React.PureComponent<IProps> {
  render() {
    const { classes, cars } = this.props;

    return (
      <div className={classes.root}>
        {cars.map(car => {
          return (
            <div className={classes.item}>
              <CarItem car={car} />
            </div>
          );
        })}
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { cars } = state.entity;
  return { cars };
};

// @ts-ignore
export default connect(mapStateToProps)(injectSheet(style as any)(CarList));
