import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import CarItem from '../../components/CarItem';
import CarItemPlaceholder from '../../components/CarItemPlaceholder';
import { Classes } from '../../theme';
import { ICar, IReduxState, FilterParams, Resource, ProgressIds, LocalStorageKeys } from '../../types';
import { ITEMS_PER_PAGE } from '../../constants';
import actions from '../../actions';
import style from './style';

interface IProps {
  classes: Classes;
  filter: FilterParams;
  dispatch: any;
  cars?: Array<ICar>;
  favoriteCarsIds?: Array<number | string>;
  inProgress?: boolean;
}

const getRange = () => {
  const result = [];
  for (let i = 0; i < ITEMS_PER_PAGE; i++) {
    result.push(i);
  }
  return result;
};

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

  renderContent() {
    const { classes, cars, inProgress, favoriteCarsIds } = this.props;
    const range = getRange();

    if (inProgress) {
      return range.map((item) => {
        return (
          <div key={item} className={classes.item}>
            <CarItemPlaceholder />
          </div>
        )
      })
    }

    const favoriteCars = cars.filter(car => favoriteCarsIds.includes(car.stockNumber));
    const withoutFavoriteCars = cars.filter(car => !favoriteCarsIds.includes(car.stockNumber));
    const orderedCars = [...favoriteCars, ...withoutFavoriteCars];

    return orderedCars.map(car => {
      return (
        <div key={car.stockNumber} className={classes.item}>
          <CarItem car={car} />
        </div>
      );
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.renderContent()}
      </div>
    )
  }
}

const mapStateToProps = (state: IReduxState) => {
  const { entity: { cars }, progress, localStorage } = state;
  const favoriteCarsIds = localStorage[LocalStorageKeys.favoriteCars];
  const inProgress = progress[ProgressIds.carsList];
  return { cars, inProgress, favoriteCarsIds };
};

export default connect(mapStateToProps)(injectSheet(style)(CarList));
