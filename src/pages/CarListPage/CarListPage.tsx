import React from 'react';
import Layout from '../../containers/Layout';
import Filter from '../../containers/Filter';

class CarListPage extends React.Component {
  render() {
    return (
      <Layout>
        <Filter />
      </Layout>
    )
  }
}

export default CarListPage;
