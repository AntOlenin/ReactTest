import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../containers/Layout';

class CarListPage extends React.Component {
  render() {
    return (
      <Layout>
        CarListPage
        <Link to={`/car/1?t=5`}>hasd</Link><br/>
        <Link to={`?q=sd`}>q</Link>
      </Layout>
    )
  }
}

export default CarListPage;
