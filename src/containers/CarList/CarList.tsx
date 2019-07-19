import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import CarItem from '../../components/CarItem';
import CarItemPlaceholder from '../../components/CarItemPlaceholder';
import { Classes } from '../../theme';
import { ICar, IReduxState, FilterParams, Resource, ProgressIds } from '../../types';
import actions from '../../actions';
import style from './style';

interface IProps {
  classes: Classes;
  filter: FilterParams;
  dispatch: any;
  cars?: Array<ICar>;
  inProgress?: boolean;
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

  renderContent() {
    const { classes, cars, inProgress } = this.props;

    if (inProgress) {
      return [1,2,3,4,5,6,7,8,9,10].map((item) => {
        return (
          <div key={item} className={classes.item}>
            <CarItemPlaceholder />
          </div>
        )
      })
    }

    return cars.map(car => {
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
  const { entity: { cars }, progress } = state;
  const inProgress = progress[ProgressIds.carsList];
  return { cars, inProgress };
};

export default connect(mapStateToProps)(injectSheet(style)(CarList));
