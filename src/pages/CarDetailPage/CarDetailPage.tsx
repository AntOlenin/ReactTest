import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../containers/Layout';
import Button from '../../components/Button';

class CarDetailPage extends React.Component {
  render() {
    return (
      <Layout>
        <Button />
        <Link to={`/`}>hey</Link>
      </Layout>
    )
  }
}

export default CarDetailPage;
