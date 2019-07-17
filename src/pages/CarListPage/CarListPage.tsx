import React from 'react';
import qs from 'qs';
import injectSheet from 'react-jss';
import Layout from '../../containers/Layout';
import Filter from '../../containers/Filter';
import CarList from '../../containers/CarList';

import style from './style';

interface IProps extends ICommonProps {
  location: Location;
}

class CarListPage extends React.Component<IProps> {
  render() {
    const { classes, location } = this.props;
    const filter = qs.parse(location.search.slice(1));

    return (
      <Layout contentClassName={classes.root}>
        <div className={classes.filterHolder}>
          <Filter />
        </div>

        <CarList filter={filter} />
      </Layout>
    )
  }
}

export default injectSheet(style as any)(CarListPage);
