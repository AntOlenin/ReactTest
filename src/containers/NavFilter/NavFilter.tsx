import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import Select from '../../components/Select';
import Button from '../../components/Button';
import { IManufacturer, IReduxState, FilterParams, Resource, FilterKeys } from '../../types';
import actions from '../../actions';
import style from './style';

interface IProps {
  classes: Classes;
  dispatch: any;
  colors?: Array<string>;
  manufacturers?: Array<IManufacturer>;
  onChange: (args: { color?: string; manufacturer?: string; }) => void;
  filter: FilterParams;
}

interface IState extends FilterParams {}

class NavFilter extends React.PureComponent<IProps, IState> {
  state: IState = {
    color: this.props.filter.color || '',
    manufacturer: this.props.filter.manufacturer || '',
  };

  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.loadEntityList({ resource: Resource.colors }));
    dispatch(actions.loadEntityList({ resource: Resource.manufacturers }));
  }

  handleFormChange = (params: { name: string; value: string; }) => {
    const name = params.name as FilterKeys;
    this.setState({ [name]: params.value })
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <div className={classes.root} data-testid="navFilter">
        <form onSubmit={this.handleSubmit}>
          <Select
            label="Color"
            name={FilterKeys.color}
            value={color}
            options={colorOptions}
            emptyOptionText="All car colors"
            onChange={this.handleFormChange}
          />
          <Select
            label="Manufacturer"
            name={FilterKeys.manufacturer}
            value={manufacturer}
            className={classes.manufacturer}
            options={manufacturerOptions}
            emptyOptionText="All manufacturers"
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

const mapStateToProps = (state: IReduxState) => {
  const { colors, manufacturers } = state.entity;
  return { colors, manufacturers };
};

export default connect(mapStateToProps)(injectSheet(style)(NavFilter));
