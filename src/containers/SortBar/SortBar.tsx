import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import Select from '../../components/Select';
import Text from '../../components/Text';
import style from './style';
import { IReduxState, FilterParams, SortTypes, FilterKeys } from '../../types';

const options = [
  { value: SortTypes.asc, text: 'Mileage Ascending' },
  { value: SortTypes.desc, text: 'Mileage Descending' }
];

interface IProps {
  classes: Classes;
  onChange: (args: FilterParams) => void;
  filter: FilterParams;
}

class SortBar extends React.PureComponent<IProps> {
  handleChange = (params: { value: string }) => {
    const value = params.value as SortTypes;
    const { onChange } = this.props;
    onChange({ [FilterKeys.sort]: value })
  };

  render() {
    const { classes, filter } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.meta}>
          <Text block bold size="l">Available cars</Text>
          <Text block size="l" className={classes.metaResults}>Showing 10 of 444 results</Text>
        </div>

        <Select
          name="sort"
          label="Sort by"
          value={filter.sort || SortTypes.asc}
          options={options}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

const mapStateToProps = (state: IReduxState) => {
  const { colors, manufacturers } = state.entity;
  return { colors, manufacturers };
};

export default connect(mapStateToProps)(injectSheet(style)(SortBar));
