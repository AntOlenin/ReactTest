import React from 'react';
import qs from 'qs';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import Text from '../../components/Text';
import Link from '../../components/Link';
import { Classes } from '../../theme';
import { IReduxState, FilterParams } from '../../types';
import style from './style';

interface IProps {
  classes: Classes;
  filter: FilterParams;
  totalPageCount?: number;
}

class Pagination extends React.PureComponent<IProps> {

  getHrefWithUpdatedPage(page: number) {
    const { filter } = this.props;
    const updatedFilter = { ...filter, page };
    const querystring = qs.stringify(updatedFilter);
    return `${window.location.pathname}?${querystring}`;
  }

  render() {
    const { classes, totalPageCount, filter } = this.props;
    const currentPage = Number(filter.page) || 1;
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPageCount;
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;

    return (
      <div className={classes.root}>
        <Link disabled={!hasPrev} className={classes.item} to={this.getHrefWithUpdatedPage(1)} textProps={{ size: 's' }}>First</Link>
        <Link disabled={!hasPrev} className={classes.item} to={this.getHrefWithUpdatedPage(prevPage)} textProps={{ size: 's' }}>Previous</Link>
        <Text size="s" className={classes.item}>Page {currentPage} of {totalPageCount}</Text>
        <Link disabled={!hasNext} className={classes.item} to={this.getHrefWithUpdatedPage(nextPage)} textProps={{ size: 's' }}>Next</Link>
        <Link disabled={!hasNext} className={classes.item} to={this.getHrefWithUpdatedPage(totalPageCount)} textProps={{ size: 's' }}>Last</Link>
      </div>
    )
  }
}

const mapStateToProps = (state: IReduxState) => {
  const { totalPageCount } = state.meta;
  return { totalPageCount };
};

export default connect(mapStateToProps)(injectSheet(style)(Pagination));
