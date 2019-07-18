import React from 'react';
import qs from 'qs';
import injectSheet from 'react-jss';
import Layout from '../../containers/Layout';
import Filter from '../../containers/Filter';
import CarList from '../../containers/CarList';
import Pagination from '../../containers/Pagination';

import style from './style';

interface IProps extends ICommonProps {
  location: Location;
  history: any;
}

class CarListPage extends React.Component<IProps> {
  handleFilterChange = (params: any) => {
    const querystring = qs.stringify(params);
    this.props.history.push({ search: querystring });
  };

  render() {
    const { classes, location } = this.props;
    const filter = qs.parse(location.search.slice(1));

    return (
      <Layout contentClassName={classes.root}>
        <div className={classes.filterHolder}>
          <Filter onChange={this.handleFilterChange}/>
        </div>

        <div className={classes.listHolder}>
          <CarList filter={filter} />

          <div className={classes.paginationHolder}>
            <Pagination filter={filter} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default injectSheet(style as any)(CarListPage);
