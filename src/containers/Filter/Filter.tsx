import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import Select from '../../components/Select';
import Button from '../../components/Button';
import style from './style';
import { IManufacturer, ReduxState } from '../../types';
import actions, { Resource } from '../../actions';

interface IProps {
  classes: Classes;
  dispatch: any;
  colors?: Array<string>;
  manufacturers?: Array<IManufacturer>;
  onChange: any;
}

interface IState {
  color: string;
  manufacturer: string;
}

class Filter extends React.PureComponent<IProps, IState> {
  state: IState = {
    color: 'red',
    manufacturer: 'Audi',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.loadEntityList({ resource: Resource.colors }));
    dispatch(actions.loadEntityList({ resource: Resource.manufacturers }));
  }

  handleFormChange = ({ name, value }: { name: string; value: string; }) => {
    // @ts-ignore
    this.setState({ [name]: value })
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const { onChange } = this.props;
    const { color, manufacturer } = this.state;
    onChange({ color, manufacturer })
  };

  render() {
    const { classes, colors, manufacturers } = this.props;
    const { color, manufacturer } = this.state;

    const colorOptions = colors.map(color => ({ value: color, text: color }));
    const manufacturerOptions = manufacturers.map(({ name }) => ({ value: name, text: name }));

    if (!colorOptions.length || !manufacturerOptions.length) {
      return null;
    }

    return (
      <div className={classes.root}>
        <form onSubmit={this.handleSubmit}>
          <Select
            label="Color"
            name="color"
            value={color}
            options={colorOptions}
            onChange={this.handleFormChange}
          />
          <Select
            label="Manufacturer"
            name="manufacturer"
            value={manufacturer}
            className={classes.manufacturer}
            options={manufacturerOptions}
            onChange={this.handleFormChange}
          />

          <div className={classes.actions}>
            <Button
              text="Filter"
            />
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { colors, manufacturers } = state.entity;
  return { colors, manufacturers };
};

// @ts-ignore
export default connect(mapStateToProps)(injectSheet(style)(Filter));
