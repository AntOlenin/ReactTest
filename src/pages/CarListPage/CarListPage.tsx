import React from 'react';
import qs from 'qs';
import injectSheet from 'react-jss';
import { RouteComponentProps } from 'react-router-dom';
import Layout from '../../containers/Layout';
import NavFilter from '../../containers/NavFilter';
import CarList from '../../containers/CarList';
import Pagination from '../../containers/Pagination';
import SortBar from '../../containers/SortBar';
import { FilterParams } from '../../types';
import { removeEmptyParams } from '../../helpers/search';

import style from './style';

interface IProps extends RouteComponentProps, ICommonProps {}

class CarListPage extends React.Component<IProps> {
  handleQueryChange = (params: FilterParams) => {
    const { location } = this.props;
    const filter = qs.parse(location.search.slice(1));
    const newFilter = removeEmptyParams({ ...filter, ...params, page: 1 });
    const querystring = qs.stringify(newFilter);
    this.props.history.push({ search: querystring });
  };

  render() {
    const { classes, location } = this.props;
    const filter = qs.parse(location.search.slice(1));

    return (
      <Layout contentClassName={classes.root}>
        <div className={classes.filterHolder}>
          <NavFilter filter={filter} onChange={this.handleQueryChange}/>
        </div>

        <div className={classes.listHolder}>
          <div className={classes.sortBarHolder}>
            <SortBar filter={filter} onChange={this.handleQueryChange}/>
          </div>

          <CarList filter={filter} />

          <div className={classes.paginationHolder}>
            <Pagination filter={filter} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default injectSheet(style)(CarListPage);
