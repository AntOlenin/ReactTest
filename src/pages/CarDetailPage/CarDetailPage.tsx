import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../../containers/Layout';
import CarContent from '../../components/CarContent';
import NotFoundPage from '../NotFoundPage';
import { ICar, IReduxState, Resource } from '../../types';
import actions from '../../actions';
import style from './style';

interface IProps extends ICommonProps, RouteComponentProps<{ id: string }> {
  car: ICar;
  dispatch: any;
  id: string;
  isFavorite: boolean;
}

class CarDetailPage extends React.Component<IProps> {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(actions.loadEntity({ resource: Resource.cars, id }));
  }

  handleSaveClick = () => {
    const { dispatch, car: { stockNumber } } = this.props;
    dispatch(actions.addCarToFavorite({ id: stockNumber }));
  };

  handleRemoveClick = () => {
    const { dispatch, car: { stockNumber } } = this.props;
    dispatch(actions.removeCarFromFavorite({ id: stockNumber }));
  };

  render() {
    const { classes, car, isFavorite } = this.props;

    if (!car) {
      return (
        <NotFoundPage />
      )
    }

    if (!car) {
      return null;
    }

    return (
      <Layout contentClassName={classes.root}>
        <CarContent
          car={car}
          isFavorite={isFavorite}
          onSave={this.handleSaveClick}
          onRemove={this.handleRemoveClick}
        />
      </Layout>
    )
  }
}

const mapStateToProps = (state: IReduxState, { match }: IProps) => {
  const { entity, localStorage: { favoriteCars } } = state;
  const { id } = match.params;
  const car = entity.cars.find(car => car.stockNumber === Number(id));
  const isFavorite = favoriteCars.includes(Number(id));
  return { id, car, isFavorite };
};

export default connect(mapStateToProps)(injectSheet(style)(CarDetailPage));
