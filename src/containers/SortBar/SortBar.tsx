import React from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import Select from '../../components/Select';
import Text from '../../components/Text';
import { IReduxState, FilterParams, SortTypes, FilterKeys, ProgressIds } from '../../types';
import style from './style';

const options = [
  { value: SortTypes.asc, text: 'Mileage Ascending' },
  { value: SortTypes.desc, text: 'Mileage Descending' }
];

interface IProps extends ICommonProps {
  onChange: (args: FilterParams) => void;
  filter: FilterParams;
  totalCarsCount: number;
  inProgress: boolean;
}

class SortBar extends React.PureComponent<IProps> {
  handleChange = (params: { value: string }) => {
    const value = params.value as SortTypes;
    const { onChange } = this.props;
    onChange({ [FilterKeys.sort]: value })
  };

  render() {
    const { classes, filter, totalCarsCount, inProgress } = this.props;
    const showingCarsCount = totalCarsCount < 10 ? totalCarsCount : 10;
    const showingRange = inProgress ? '...' : `${showingCarsCount} of ${totalCarsCount}`;

    return (
      <div className={classes.root}>
        <div className={classes.meta}>
          <Text block bold size="l">Available cars</Text>
          <Text block size="l" className={classes.metaResults}>
            Showing {showingRange} results
          </Text>
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
  const { entity: { colors, manufacturers }, meta: { totalCarsCount }, progress } = state;
  const inProgress = progress[ProgressIds.carsList];
  return { colors, manufacturers, totalCarsCount, inProgress };
};

export default connect(mapStateToProps)(injectSheet(style)(SortBar));
