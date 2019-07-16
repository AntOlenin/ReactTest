import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import Select from '../../components/Select';
import Button from '../../components/Button';
import style from './style';
import { IManufacturer, ReduxState } from '../../types';
import actions from '../../actions';

interface IProps {
  classes: Classes;
  dispatch: any;
  colors?: Array<string>;
  manufacturers?: Array<IManufacturer>;
}

class Filter extends React.PureComponent<IProps> {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.loadColorList());
    dispatch(actions.loadManufacturerList());
  }

  handleSubmit = () => {
    debugger
  };

  render() {
    const { classes, colors, manufacturers } = this.props;

    const colorOptions = colors.map(color => ({ value: color, text: color }));
    const manufacturerOptions = manufacturers.map(({ name, uuid }) => ({ value: uuid, text: name }));

    if (!colorOptions.length || !manufacturerOptions.length) {
      return null;
    }
    debugger

    return (
      <div className={classes.root}>
        <Select
          label="Color"
          value={colorOptions[0].value}
          options={colorOptions}
          onChange={() => {debugger}}
        />
        <Select
          className={classes.manufacturer}
          label="Manufacturer"
          value={manufacturerOptions[0].value}
          options={manufacturerOptions}
          onChange={() => {debugger}}
        />

        <div className={classes.actions}>
          <Button
            text="Filter"
            onClick={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { colors, manufacturers } = state;
  return { colors, manufacturers };
};

// @ts-ignore
export default connect(mapStateToProps)(injectSheet(style as any)(Filter));
