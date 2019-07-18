import React from 'react';
import injectSheet from 'react-jss';
import { connect } from 'react-redux';
import Layout from '../../containers/Layout';
import Text from '../../components/Text';
import Button from '../../components/Button';
import { getCarInfo, getCarTitle } from '../../helpers/car';
import { ICar, ReduxState } from '../../types';
import actions, { Resource } from '../../actions';
import style from './style';

interface IProps extends ICommonProps {
  car: ICar;
  dispatch: any;
  match: any;
  id: any;
}

class CarDetailPage extends React.Component<IProps> {
  componentDidMount() {
    const { dispatch, id } = this.props;
    dispatch(actions.loadEntity({ resource: Resource.cars, id }));
  }

  handleSaveClick = () => {
  };

  render() {
    const { classes, car } = this.props;

    if (!car) {
      return null;
    }

    const carTitle = getCarTitle(car);
    const carInfo = getCarInfo(car);

    return (
      <Layout contentClassName={classes.root}>
        <div className={classes.cover} />

        <div className={classes.content}>
          <div className={classes.description}>
            <Text block bold size="xl">{carTitle}</Text>
            <Text block size="l" className={classes.text}>{carInfo}</Text>

            <Text block size="m" className={classes.text}>
              This car is currently available and can be delivered as soon as tomorrow morning.
              Please be aware that delivery times shown in this page are not definitive and may
              change due to bad weather conditions.
            </Text>
          </div>

          <div className={classes.saveBlock}>
            <Text size="m">If you like this car, click the button and save it in your collection of favourite items.</Text>

            <div className={classes.actions}>
              <Button
                text="Save"
                onClick={this.handleSaveClick}
              />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = (state: ReduxState, { match }: IProps) => {
  const id = Number(match.params.id);
  const car = state.entity.cars.find(car => car.stockNumber === id);
  return { id, car };
};

// @ts-ignore
export default connect(mapStateToProps)(injectSheet(style as any)(CarDetailPage));
