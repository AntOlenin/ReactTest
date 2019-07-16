import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../containers/Layout';

class CarDetailPage extends React.Component {
  render() {
    return (
      <Layout>
        <Link to={`/`}>hey</Link>
      </Layout>
    )
  }
}

export default CarDetailPage;
