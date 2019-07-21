import React from 'react';
import injectSheet from 'react-jss';
import Text from '../Text/index';
import { ICar } from '../../types';
import style from './style';
import Button from '../Button/index';
import { getCarInfo, getCarTitle } from '../../helpers/car';

interface IProps extends ICommonProps {
  car: ICar;
  isFavorite: boolean;
  onSave: () => void;
  onRemove: () => void;
}

class CarContent extends React.PureComponent<IProps> {
  render() {
    const { classes, car, isFavorite, onSave, onRemove } = this.props;

    const carTitle = getCarTitle(car);
    const carInfo = getCarInfo(car);

    return (
      <>
        <div className={classes.cover} style={{ backgroundImage: `url(${car.pictureUrl})` }} />

        <div className={classes.content}>
          <div className={classes.description}>
            <Text block bold size="xl" testId="carDetailTitle">{carTitle}</Text>
            <Text block size="l" className={classes.text} testId="carDetailInfo">{carInfo}</Text>

            <Text block size="m" className={classes.text}>
              This car is currently available and can be delivered as soon as tomorrow morning.
              Please be aware that delivery times shown in this page are not definitive and may
              change due to bad weather conditions.
            </Text>
          </div>

          <div className={classes.saveBlock}>
            <Text size="m">If you like this car, click the button and save it in your collection of favourite items.</Text>

            <div className={classes.actions}>
              {isFavorite
                ? <Button text="Remove" testId="carDetailRemoveButton" onClick={onRemove} />
                : <Button text="Save" testId="carDetailSaveButton" onClick={onSave} />
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default injectSheet(style)(CarContent);
