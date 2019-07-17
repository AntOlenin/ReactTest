import React from 'react';
import injectSheet from 'react-jss';
import Layout from '../../containers/Layout';
import Filter from '../../containers/Filter';
import CarList from '../../containers/CarList';

import style from './style';

class CarListPage extends React.Component<ICommonProps> {
  render() {
    const { classes } = this.props;

    return (
      <Layout contentClassName={classes.root}>
        <div className={classes.filterHolder}>
          <Filter />
        </div>

        <CarList />
      </Layout>
    )
  }
}

export default injectSheet(style as any)(CarListPage);
