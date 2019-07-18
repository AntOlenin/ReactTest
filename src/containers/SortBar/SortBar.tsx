import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Classes } from '../../theme';
import Select from '../../components/Select';
import Text from '../../components/Text';
import style from './style';
import { IReduxState, Filter } from '../../types';

enum Sort {
  asc = 'asc',
  desc = 'desc',
}

const options = [
  { value: Sort.asc, text: 'Mileage Ascending' },
  { value: Sort.desc, text: 'Mileage Descending' }
];

interface IProps {
  classes: Classes;
  onChange: any;
  filter: Filter;
}

class SortBar extends React.PureComponent<IProps> {
  handleChange = ({ name, value }: any) => {
    const { onChange } = this.props;
    onChange({ [name]: value })
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
          value={filter.sort || Sort.asc}
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