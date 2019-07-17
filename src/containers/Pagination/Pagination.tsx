import React from 'react';
import qs from 'qs';
import classnames from 'classnames';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import Text from '../../components/Text';
import { Classes } from '../../theme';
import { ReduxState } from '../../types';
import style from './style';

interface IProps {
  classes: Classes;
  filter: any;
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
    const linkClassName = classnames(classes.link, classes.item);
    const currentPage = Number(filter.page) || 0;
    const hasPrev = currentPage > 1;
    const hasNext = currentPage < totalPageCount;
    const nextPage = currentPage + 1;
    const prevPage = currentPage - 1;

    return (
      <div className={classes.root}>
        {hasPrev && <Link to={this.getHrefWithUpdatedPage(1)} className={linkClassName}>First</Link>}
        {hasPrev && <Link to={this.getHrefWithUpdatedPage(prevPage)} className={linkClassName}>Previous</Link>}
        <Text size="s" className={classes.item}>Page {currentPage} of {totalPageCount}</Text>
        {hasNext && <Link to={this.getHrefWithUpdatedPage(nextPage)} className={linkClassName}>Next</Link>}
        {hasNext && <Link to={this.getHrefWithUpdatedPage(totalPageCount)} className={linkClassName}>Last</Link>}
      </div>
    )
  }
}

const mapStateToProps = (state: ReduxState) => {
  const { totalPageCount } = state.meta;
  return { totalPageCount };
};

// @ts-ignore
export default connect(mapStateToProps)(injectSheet(style as any)(Pagination));
