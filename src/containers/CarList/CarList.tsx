import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import CarItem from '../../components/CarItem';
import { Classes } from '../../theme';
import { ICar, IReduxState, Filter, Resource } from '../../types';
import actions from '../../actions';
import style from './style';

interface IProps {
  classes: Classes;
  filter: Filter;
  dispatch: any;
  cars?: Array<ICar>;
}

class CarList extends React.PureComponent<IProps> {
  componentDidMount() {
    const { filter, dispatch } = this.props;
    dispatch(actions.loadEntityList({ resource: Resource.cars, filter }));
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.filter === this.props.filter) {
      return;
    }

    const { filter, dispatch } = this.props;
    dispatch(actions.loadEntityList({ resource: Resource.cars, filter }));
  }

  render() {
    const { classes, cars } = this.props;

    return (
      <div className={classes.root}>
        {cars.map(car => {
          return (
            <div key={car.stockNumber} className={classes.item}>
              <CarItem car={car} />
            </div>
          );
        })}
      </div>
    )
  }
}

const mapStateToProps = (state: IReduxState) => {
  const { cars } = state.entity;
  return { cars };
};

export default connect(mapStateToProps)(injectSheet(style)(CarList));
